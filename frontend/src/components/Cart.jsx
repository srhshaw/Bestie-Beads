import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import{ BASE_URL } from '../globals'

const Cart = ({pieces, prices}) => {
    const [cartPieces, setCartPieces] = useState([pieces])
    const [cartPrices, setCartPrices] = useState([prices])

    console.log(cartPieces)
    console.log(cartPrices)

    return(
        <div className = "cart">
            <div>
            {cartPieces.map((cartPiece) =>
                <div>
                    {cartPiece}
                </div>
            )}
                <h5>Fill this cart!</h5>
            </div>
        </div>
    )
}

export default Cart