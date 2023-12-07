import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import './PiecePage.css'
import { BASE_URL } from "../globals"
import ReviewForm from "./ReviewForm"
// import Cart from "./Cart"

export default function PieceDetail({userId}) {
    //piece is the current state, setPiece is the function that allows that state to be updated.  Every time you call setPiece() it will re-render the component with the new value for piece.
    const [piece, setPiece] = useState(null)
    let {id} = useParams()
    const [reviews, setReviews] = useState([])
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [pieceInCart, setPieceInCart] = useState(false)
    let cartPieces= []
    let cartPrices = []

    useEffect(() => {
        const getPiece = async() => {
            const response = await axios.get(`${BASE_URL}/pieces/${id}`)
            setPiece(response.data)
        }
        const getPieceReviews = async() => {
            const response = await axios.get(`${BASE_URL}/reviews/piece/${id}`)
            setReviews(response.data)
            console.log(response.data)
        }
        getPiece()
        getPieceReviews()
    }, [showReviewForm])

    function handleClick(piece, price) {

        cartPieces.push(piece)
        cartPrices.push(price)
        console.log(cartPieces)
        console.log(cartPrices)
    }
    
return piece ? (
    <>
        <div className = "piece">
                <div className = "pieceImage">
                    <img className = "detailImage" src= {piece.image} width ="600"/>
                </div>
                <div className="pieceTextButton">
                    <div className = "pieceText">
                        <h2>{piece.name}</h2>
                        <h3>${piece.price}</h3>
                        <ul>
                        {piece.details.map((detail, id)=> (
                            <li key = {id}>{detail}</li>
                        ))}
                        </ul>
                        <h4>{piece.description}</h4>
                    </div>
                    <button className="orderButton" style={{color: "white", width: "10vw", height:"4vh",alignSelf: "flex-end", marginRight:"4vw", marginTop:"2vh", backgroundColor:"navy"}} onClick = {() => setPieceInCart(!pieceInCart)}>{pieceInCart ? "In Cart" : "Add to Cart"}</button>
                        
                    {/* onClick = {handleClick(piece._id, piece.price)} */}
                    
                    {/* <Cart pieces = {cartPieces} prices = {cartPrices}/> */}
                </div>
        </div>
        <div className = "pieceReviews">
            <div className="pieceButton">
                <button style={{color: "white", width: "10vw", height:"4vh",alignSelf: "flex-end", marginRight:"4vw",marginBottom:"1vh", backgroundColor:"navy"}} onClick = {() => setShowReviewForm(!showReviewForm)}>{showReviewForm ? "Return to Piece" : "Write a review"}</button>
                {showReviewForm ? < ReviewForm pieceId = {piece._id} setReviews = {setReviews} setShowReviewForm = {setShowReviewForm}/> : null}
            </div>
            <div className = "pieceReviewsList">
                <h3>Customer Reviews</h3> 
                {reviews.map((review)=> (
                    <div className= "reviewDiv" key = {review.userId}>
                        <h6> {review.userName} </h6>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
) : <h3>Finding piece...</h3>
}