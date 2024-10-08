import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import './PiecePage.css'
import { BASE_URL } from "../globals"
import ReviewForm from "./ReviewForm"

export default function PieceDetail({userId}) {
    const [piece, setPiece] = useState(null)
    let {id} = useParams()
    const [reviews, setReviews] = useState([])
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [pieceInCart, setPieceInCart] = useState(false)
    const [clickedButton, setClickedButton] = useState("")


    useEffect(() => {
        console.log(BASE_URL)
        const getPiece = async() => {
            const response = await axios.get(`${BASE_URL}/pieces/${id}`)
            setPiece(response.data)
            const myCart = localStorage.getItem("myCart")
            if (myCart) {
                const oldCart = JSON.parse(myCart)
                const found = oldCart.find((element) => element._id == response.data._id)
                if (found) {
                    setPieceInCart(true)
                }
            }
        }
        const getPieceReviews = async() => {
            const response = await axios.get(`${BASE_URL}/reviews/piece/${id}`)
            setReviews(response.data)
            console.log(response.data)
        }
        getPiece()
        getPieceReviews()
       
    }, [showReviewForm])

    function handleAddToCart() {
        const myCart = localStorage.getItem("myCart")
        let newCart = []
        if (myCart) {
            let found = false
            const oldCart = JSON.parse(myCart)
            oldCart.forEach((element) => {
                if (element._id != piece._id) {
                    newCart.push(element)
                } else {
                    found = true
                }
            })
            if (!found) {
                newCart.push(piece)
            }
        } else {
            newCart.push(piece)
        }
        localStorage.setItem("myCart", JSON.stringify(newCart))
    }
    
return piece ? (
    <>
        <div className = "piece" >
                <div className = "pieceImage">
                    <img className = "detailImage" src= {piece.image} width ="600"/>
                </div>
                <div className="pieceTextButton">
                    <div className = "pieceText">
                        <h2 className = "pieceName">{piece.name}</h2>
                        <h2 className = "piecePrice">${piece.price}</h2>
                        <ul>
                        {piece.details.map((detail, id)=> (
                            <li key = {id}>{detail}</li>
                        ))}
                        </ul>
                        <h4>{piece.description}</h4>
                    </div>
                    <button className="orderButton" type = "submit" onClick={()=>{
                        setClickedButton("addToCart")
                        setPieceInCart(!pieceInCart)
                        handleAddToCart()
                        }}>{pieceInCart ? "Remove from Cart" : "Add to Cart"}</button>
                </div>
        </div>
        <div className = "pieceReviews">
            <div>
                <button className= "reviewButton" type = "submit" onClick={()=>{
                    setClickedButton("showReviewForm")
                    setShowReviewForm(!showReviewForm)
                }}>{showReviewForm ? "Return to Piece" : "Write a review"}</button>
                {showReviewForm ? < ReviewForm pieceId = {piece._id} setReviews = {setReviews} setShowReviewForm = {setShowReviewForm}/> : null}
            </div>
            <div className = "pieceReviewsList">
                <h3>Customer Reviews</h3> 
                {reviews.map((review)=> (
                    <div className= "reviewDiv" key = {review.userId}>
                        <h6 className = "reviewerName"> {review.userName} </h6>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
) : <h3>Finding piece...</h3>
}