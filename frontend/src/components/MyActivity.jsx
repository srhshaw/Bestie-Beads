import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"
import EditReviewForm from "./EditReviewForm"
import './MyActivity.css'

export default function myActivity() {
    const [reviews, setReviews] = useState([])
    //const [pieceDetails, setPieceDetails] = useState({})
    const [showEditReviewForm, setShowEditReviewForm] = useState(false)

    useEffect(() => {
        async function doStuff() {
            // const addPieceDetailsToReviews = (reviewsArray) => {
            //     const allReviews = reviewsArray.map(async (review) => (
            //         const response = await axios.get(`${BASE_URL}/pieces/${review.piece}`)
            //         review.pieceName = response.data.name
            //         review.pieceImage = response.data.image
            //     ))
            //     console.log(reviewsArray)
            //     setReviews([...reviewsArray])
                
            // }

            const getUserReviews = async() => {
                let userId = localStorage.getItem('userId')
                const response = await axios.get(`${BASE_URL}/reviews/user/${userId}`)
                setReviews(response.data)
                console.log(response.data)
                // addPieceDetailsToReviews(response.data)
            }
           
            getUserReviews()
            //await getReviewsAndPieces(getUserReviews(), addPieceDetailsToReviews())
        }
        doStuff()
    }, [showEditReviewForm])
    console.log(reviews) 

return(
    <div>
        <div className="myOrdersList">
            <h3>My Orders</h3>
        </div>
        <div className="myReviewsList">
            
            <h3>My Reviews</h3>
            {reviews.map((review) => (
            <div className = "reviewContent" key={review._id}>
            <img className="review_piece_image" alt="Bracelet" src={review.piece.image} width="85"/>
            <h4>{review.piece.name}</h4>
            <h6>{review.text}</h6>
            
            <button className="editReviewButton" onClick={() => setShowEditReviewForm(showEditReviewForm === review._id ? null : review._id)}>
                {showEditReviewForm === review._id ? "Cancel Edit" : "Edit"}
            </button>
            
            {showEditReviewForm === review._id && (
                <EditReviewForm 
                    review={review} 
                    setReviews={setReviews} 
                    setShowEditReviewForm={setShowEditReviewForm}
                />
            )}
            
            
        </div>
       
    ))}
    </div>

        {/* <div className = "myReviewsList">
            <h3>My Reviews</h3>
            {reviews.map((review) => (
            <div key = {review._id}>
                <img className = "review_piece_image" alt="Bracelet" src={review.piece.image} width ="85"/>
                <h4>{review.piece.name}</h4>
                <h6>{review.text}</h6>
                <button onClick = {() => setShowEditReviewForm(!showEditReviewForm)}>{showEditReviewForm ? "Cancel Edit" : "Edit"}</button>
                {showEditReviewForm ? < EditReviewForm review = {review} setReviews = {setReviews} setShowEditReviewForm = {setShowEditReviewForm}/> : null}
            </div>
            ))}
        </div> */}
    </div>
)
}