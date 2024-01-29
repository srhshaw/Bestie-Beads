import { useState, useEffect } from 'react'
import './Cart.css'

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


    return(
        <div className = "cart">
            <div>
                <h3>My Cart</h3>
            </div>
            {cart.map((cartPiece) =>
            <div key = {cartPiece._id} className = "cartContent">
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
    )
}

export default Cart