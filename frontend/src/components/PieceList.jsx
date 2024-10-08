import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import{ BASE_URL } from '../globals'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import './PieceList.css'

const PieceList = () => {
    const [pieces, setPieces] = useState([])
 
    useEffect(() => {
        console.log(BASE_URL)
        const getPieces = async () => {
        const response = await axios.get(`${BASE_URL}/pieces`)
        setPieces(response.data)
        }
        getPieces()
    }, [])
    
    return (
        <div className = "piece_container">
            {pieces.map((piece) => (
            <Link key = {piece._id} to = {`/pieces/${piece._id}`}>
            <Card>
                <img className = "piece_image" alt="Bracelet" src={piece.image}/>
                <CardBody>
                    <CardTitle tag="h5">{piece.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">${piece.price}</CardSubtitle>
                    </CardBody>
                </Card>
            </Link>
            ))}
        </div>
    )
}

export default PieceList