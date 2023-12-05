import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"
import ReviewForm from "./ReviewForm"

export default function myActivity() {
    const [reviews, setReviews] = useState([])
    //const [pieceDetails, setPieceDetails] = useState({})

    useEffect(() => {
        async function doStuff() {
            const addPieceDetailsToReviews = (reviewsArray) => {
                reviewsArray.map(async (review) => {
                    const response = await axios.get(`${BASE_URL}/pieces/${review.piece}`)
                    review.pieceName = response.data.name
                    review.pieceImage = response.data.image
                })
                console.log(reviewsArray)
                setReviews(reviewsArray)
                console.log(reviews)
            }

            const getUserReviews = async() => {
                let userId = localStorage.getItem('userId')
                const response = await axios.get(`${BASE_URL}/reviews/user/${userId}`)
                //setReviews(response.data)
                console.log(response.data)
                addPieceDetailsToReviews(response.data)
            }
           
            getUserReviews()
            //await getReviewsAndPieces(getUserReviews(), addPieceDetailsToReviews())
        }
        doStuff()
    }, [])
    

return(
    <div>
        <div>
            <h3>My Orders</h3>

        </div>
        <div className = "myReviewsList">
            <h3>My Reviews</h3>
            {reviews.map((review) => (
            <div key = {review._id}>
                <img className = "review_piece_image" alt="Bracelet" src={review.pieceImage}/>
                <h4>{review.pieceName}</h4>
                <h6>{review.text}</h6>
                <button>Edit</button>
            </div>
            ))}
        </div>
    </div>
)
}