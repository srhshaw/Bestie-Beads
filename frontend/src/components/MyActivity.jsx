import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"
import EditReviewForm from "./EditReviewForm"
import './MyActivity.css'

export default function myActivity() {
    const [reviews, setReviews] = useState([])
    const [showEditReviewForm, setShowEditReviewForm] = useState(false)
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
    }, [showEditReviewForm])
    

return(
    <div>
        <div className="myOrdersList">
            <h3>My Orders</h3>
            {orders.map((order) => (
                <div className = "orderContent" key={order._id}>
                    <h4>Order #{order._id}</h4>
                    {order.piece.map((piece) =>
                        <div className="orderPiecesContent">
                            <img className="order_piece_image" alt="Bracelet" src={piece.image} width="85"/>
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
    </div>
)
}