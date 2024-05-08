import { useState, useEffect } from 'react'
import './Cart.css'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'

const Cart = ({pieces, prices}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getCart = async() => {
            const myCart = localStorage.getItem("myCart")
            if (myCart) {
                const cart = JSON.parse(myCart)
                setCart(cart)
                let total = 0
                cart.forEach(element => 
                    total += element.price
                )
                setTotal(total)
            }
        }
        getCart()
    },[])
//PLAYPEN
    function handleRemoveFromCart(id) {
        const myCart = localStorage.getItem("myCart")
        let newCart = []
            const oldCart = JSON.parse(myCart)
            oldCart.forEach((element) => {
                if (element._id != id) {
                    newCart.push(element)
                }
            })
        localStorage.setItem("myCart", JSON.stringify(newCart))
        setCart(newCart)
    }
//PLAYPEN END

    function handleSave(e) {
        e.preventDefault()
        const contactForm = e.target
        const contactFormData = new FormData(contactForm)
        const contactFormJsObj = Object.fromEntries(contactFormData.entries())
        console.log(contactFormJsObj)
        if (contactFormJsObj.firstName === "" || contactFormJsObj.lastName ==="" || contactFormJsObj.email === "" || contactFormJsObj.address === ""){
            alert("Please enter valid contact information.")
        } else {
            localStorage.setItem("contactInfo", JSON.stringify(contactFormJsObj))
        }
        
    }

    return(
        //CONTACT FORM PLAYPEN
        <div className = "order"> 
            <div>
                <h3>Order Contact</h3>
            </div>
            <Form className= "contactInfo" method= "post" onSubmit={handleSave}>
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="firstName">
                        First Name
                        </Label>
                        <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="lastName">
                        Last Name
                        </Label>
                        <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="email">
                    Email
                    </Label>
                    <Input
                    id="email"
                    name="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="address">
                    Address
                    </Label>
                    <Input
                    id="address"
                    name="address"
                    placeholder="1234 Main St.  Austin, TX  78123"
                    />
                </FormGroup>
                <Button className= "saveContactInfoButton" type = "submit">
                Save
                </Button>
            </Form>

            <div className = "cart">
                <div>
                    <h3>My Cart</h3>
                </div>
                {cart.map((cartPiece) =>
                <div key = {cartPiece._id} className = "cartContent">
                        <button className="remove" onClick={()=>{
                            handleRemoveFromCart(cartPiece._id)
                        }}>X</button>
                        <img className="cart_piece_image" alt="Bracelet" src={cartPiece.image} width="85"/>
                        <h4>{cartPiece.name}</h4>
                        <h4>${cartPiece.price}</h4>
                </div>
                )}
                <div className='total'>
                    <h3>Cart Total: ${total}</h3>
                </div>
                <button className="submitButton" style={{color: "white", width: "10vw", height:"4vh",alignSelf: "flex-end", marginRight:"4vw", marginTop:"2vh", backgroundColor:"navy"}} type = "submit" onClick={()=>{}}>Submit Order</button>
            </div>

        </div>
    )
}

export default Cart