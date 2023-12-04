import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
// import './PiecePage.css'
import { BASE_URL } from "../globals"
import ReviewForm from "./ReviewForm"

export default function PieceDetails() {
    //piece is the current state, setPiece is the function that allows that state to be updated.  Every time you call setPiece() it will re-render the component with the new value for piece.
    const [piece, setPiece] = useState(null)
    let {id} = useParams()
    console.log(id)
    const [reviews, setReviews] = useState([])
    const [showReviewForm, setShowReviewForm] = useState(false)

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
    }, [])
    
return piece ? (
    <>
        <div className = "piece">
                <div className = "pieceImage">
                    <img src= {piece.image} width ="600"/>
                </div>
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
                <button>Add to order</button>
        </div>
        <div className = "pieceReviews">
            <div className="pieceButton">
                <button onClick = {() => setShowReviewForm(!showReviewForm)}>{showReviewForm ? "Return to Piece" : "Write a review"}</button>
                {showReviewForm ? < ReviewForm /> : null}
            </div>
            <div className = "pieceReviewsList">
                <h3>Customer Reviews</h3> 
                {reviews.map((review)=> (
                    <div key = {review.userId}>
                        <h6> {review.userName} </h6>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
) : <h3>Finding piece...</h3>
}