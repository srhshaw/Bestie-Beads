import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
// import './PiecePage.css'
import { BASE_URL } from "../globals"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 


const ReviewForm = ({pieceId, setReviews, setShowReviewForm}) => {

    const createReview = async(url, object) => {
      
        const response = await axios.post(url, object)
        setReviews(prevReviews => {
            console.log("Previous Reviews:", prevReviews);
            const updatedReviews = [...prevReviews, response.data];
            console.log("Updated Reviews:", updatedReviews);
            return updatedReviews;
        });
        setShowReviewForm(false)
        //alternative method for forcing page reload; better for multi-page apps
        //window.location.reload()
    }

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
        //console.log(userId)
        console.log(pieceId)
        formJson.userId = localStorage.getItem('userId')
        formJson.piece = pieceId
        console.log(formJson)

        let endpointUrl = `${BASE_URL}/reviews`
        createReview(endpointUrl, formJson)
    }

return (
    <Form method = "post" onSubmit = {handleSubmit}>
        <FormGroup>
            <Label for="exampleEmail"> Name </Label>
            <Input
            id="exampleName"
            name="userName"
            placeholder="Enter your name"
            type="text"
            />
        </FormGroup>  
        <FormGroup>
            <Label for="exampleText">
            Review
            </Label>
            <Input
            id="exampleText"
            name="text"
            placeholder="Write your comments here"
            type="textarea"
            />
        </FormGroup>
        <Button type = "submit">
            Submit
        </Button>
    </Form>
)
}

export default ReviewForm