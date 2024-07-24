import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"
import EditReviewForm from "./EditReviewForm"
import './MyActivity.css'

export default function myActivity() {
    const [reviews, setReviews] = useState([])
    const [review_idInEdit, setReview_IdInEdit] = useState(null)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async() => {
            let userId = localStorage.getItem('userId')
            const response = await axios.get(`${BASE_URL}/orders/user/${userId}`)
            setOrders(response.data)
            console.log(response.data)
        }

        const getUserReviews = async() => {
            let userId = localStorage.getItem('userId')
            const response = await axios.get(`${BASE_URL}/reviews/user/${userId}`)
            setReviews(response.data)
        }
       
        getOrders()
        getUserReviews()
    }, [review_idInEdit])
    

return(
    <div>
        <div className="myOrdersList">
            <h3>My Orders</h3>
            {orders.map((order) => (
                <div className = "orderContent" key={order._id}>
                    <h4>Order #{order._id}</h4>
                    {order.piece.map((piece) =>
                        <div className="orderPiecesContent">
                            <img className="order_piece_image" alt="Bracelet" src={piece.image}/>
                            <h4>{piece.name}</h4>
                            <h4>${piece.price}</h4>
                        </div>
                    )}
                </div>   
            ))}         

        </div>
        <div className="myReviewsList"> 
            <h3>My Reviews</h3>
            {reviews.map((review) => (
            <div className = "reviewContent" key={review._id}>
                <img className="review_piece_image" alt="Bracelet" src={review.piece.image} width="85"/>
                <h4 className="reviewPiece">{review.piece.name}</h4>
                {/* The below conditional displays the review text when the associated piece is not in edit, and does not display the text when it is in edit, ie when review_idInEdit === review._id. */}
                {review_idInEdit === review._id ? null : <p className="reviewText" id="reviewText">{review.text}</p>}
                <button className = {review_idInEdit === review._id ? "cancelEditStyle" : "editStyle"} onClick={() => setReview_IdInEdit(review_idInEdit === review._id ? null : review._id)}>
                    {review_idInEdit === review._id ? "Cancel Edit" : "Edit"}
                    
                </button>
                
                {review_idInEdit === review._id && (
                    <EditReviewForm 
                        review={review} 
                        setReviews={setReviews} 
                        setReview_IdInEdit={setReview_IdInEdit}
                    />
                )}
            </div>
            ))}
        </div>
    </div>
)
}