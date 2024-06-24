import { useState, useEffect } from 'react'
import './Cart.css'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../globals"
import axios from "axios"
import OrderConfirm from "./OrderConfirm"

const Cart = ({pieces, prices}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [deliveryInfo, setdeliveryInfo] = useState({})

    let navigate = useNavigate()

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
                if (cart.length === 0){
                    showEmptyCartMsg()
                } else {
                    hideEmptyCartMsg()
                }
            }
        }
        const getDeliveryInfo = async() => {
            const deliverTo = localStorage.getItem("contactInfo")
            if (deliverTo) {
                const deliveryInfo = JSON.parse(deliverTo)
                setdeliveryInfo(deliveryInfo)
                hideForm()
                showDeliverTo()
            } else {
                showForm()
                hideDeliverTo()
            }
        }
        getCart()
        getDeliveryInfo()
    },[])

    const createOrder = async(url, object) => {
        const response = await axios.post(url, object)

        if(response.status === 201){
            const myCart = localStorage.getItem("myCart")
            let newCart = []
            localStorage.setItem("myCart", JSON.stringify(newCart))
            setCart(newCart)
            setTotal(0)
            navigate('/orderconfirm', {replace: true})
        } else {
            alert("Order could not be submitted. Please try again or email BestieBeads@email.com for assistance.")
        }
    }

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

        let total = 0
            newCart.forEach(element => 
                total += element.price
            )
        setTotal(total)

        if (newCart.length === 0){
            showEmptyCartMsg()
        } else {
            hideEmptyCartMsg()
        }
    }

    function handleSave(e) {
        e.preventDefault()
        const contactForm = e.target
        const contactFormData = new FormData(contactForm)
        const contactFormJsObj = Object.fromEntries(contactFormData.entries())
        if (contactFormJsObj.firstName === "" || contactFormJsObj.lastName ==="" || contactFormJsObj.email === "" || contactFormJsObj.address === ""){
            alert("Please enter valid contact information.")
        } else {
            localStorage.setItem("contactInfo", JSON.stringify(contactFormJsObj))
            setdeliveryInfo(contactFormJsObj)
            hideForm()
            showDeliverTo()
        }
    }

    function handleSubmit(){
        if(deliveryInfo != {} && cart != []){
            const order = deliveryInfo
            order.userId = localStorage.getItem("userId")
            order.piece = cart
            order.orderTotal = total
            let endpointUrl = `${BASE_URL}/orders`
            createOrder(endpointUrl, order)  
        } else {
            alert("This order is missing information.  Please check that Order Contact and My Cart info are complete and submit again.")
        }
    }
    function hideForm(){
        const contactInput = document.getElementById("contactInput")
        contactInput.classList.add("offDisplay")
    }
    function showForm(){
        const contactInput = document.getElementById("contactInput")
        contactInput.classList.remove("offDisplay")
    }
    function hideDeliverTo(){
        const deliverTo = document.getElementById("deliverTo")
        deliverTo.classList.add("offDisplay")
    }
    function showDeliverTo(){
        const deliverTo = document.getElementById("deliverTo")
        deliverTo.classList.remove("offDisplay")
    }
    function hideEmptyCartMsg(){
        const emptyMsg = document.getElementById("emptyCart")
        emptyMsg.classList.add("offDisplay")
    }
    function showEmptyCartMsg(){
        const emptyMsg = document.getElementById("emptyCart")
        emptyMsg.classList.remove("offDisplay")
    }

    return(
        <div className = "order"> 
                <div>
                    <h3>Order Contact</h3>
                </div>
                <Form className= "contactInfo" id = "contactInput" method= "post" onSubmit={handleSave}>
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
                    <Button className= "saveContactInfoButton" type= "submit">
                    Save
                    </Button>
                </Form>
                <div id = "deliverTo">
                    <p>
                        {deliveryInfo.firstName + " " + deliveryInfo.lastName}<br />
                        {deliveryInfo.email}<br />
                        {deliveryInfo.address}
                    </p>
                    <Button className= "editContactButton" type = "button" onClick={()=>{
                                hideDeliverTo()
                                showForm()
                                }}>
                        Edit
                    </Button>
                </div>
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
                <div id = "emptyCart">
                    <p>
                        Your cart is empty.
                    </p>
                </div>
                <div className='total'>
                    <h3>Cart Total: ${total}</h3>
                </div>
                <Link to ="/pieces">
                <button className="shopButton" style={{color: "white", width: "10vw", height:"4vh",alignSelf: "flex-end", marginRight:"4vw", marginTop:"2vh", backgroundColor:"navy"}} type = "button" >
                    Keep Shopping
                </button>
                </Link>
                <button className="submitButton" style={{color: "white", width: "10vw", height:"4vh",alignSelf: "flex-end", marginRight:"4vw", marginTop:"2vh", backgroundColor:"navy"}} type = "submit" onClick={()=>{handleSubmit()}}>Submit Order</button>
            </div>
        </div>
    )
}

export default Cart