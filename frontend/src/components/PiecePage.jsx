import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
// import './PiecePage.css'
import { BASE_URL } from "../globals"

export default function PieceDetails() {
    //piece is the current state, setPiece is the function that allows that state to be updated.  Every time you call setPiece() it will re-render the component with the new value for piece.
    const [piece, setPiece] = useState()
    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getPiece = async() => {
            const response = await axios.get(`${BASE_URL}/pieces/${id}`)
            setPiece(response.data)
        }
        getPiece()
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
                    {piece.details.map((detail)=> (
                        <li>{detail}</li>
                    ))}
                    </ul>
                    <h4>{piece.description}</h4>
                </div>
                <button>Add to order</button>
        </div>
        <div className = "pieceReviews">
            <button>Write a review</button>
            <h3>Customer Reviews</h3>
            <div> 
                {/* Reviews pulled by piece id */}
            </div>
        </div>
    </>
) : <h3>Finding piece...</h3>
}