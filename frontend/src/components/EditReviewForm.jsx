import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 

const EditReviewForm = ({review, setReviews, setShowEditReviewForm}) => {
    const [clickedButton, setClickedButton] = useState("")

    const updateReview = async(url, object) => {
      
        const response = await axios.put(url, object)
        // setReviews(prevReviews => {
        //     console.log("Previous Reviews:", prevReviews);
        //     const updatedReviews = [...prevReviews, response.data];
        //     console.log("Updated Reviews:", updatedReviews);
        //     return updatedReviews;
        // });
        // setShowReviewForm(false)
        //alternative method for forcing page reload; better for multi-page apps
        //window.location.reload()
        
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (clickedButton === "update") {
            const form = e.target
            console.log(form)
            const formData = new FormData(form)

            const formJson = Object.fromEntries(formData.entries())
            console.log(formJson)
            formJson.userId = localStorage.getItem('userId')
            formJson.piece = review.piece._id
            console.log(formJson)

            let endpointUrl = `${BASE_URL}/reviews/${review._id}`
            updateReview(endpointUrl, formJson)
            setShowEditReviewForm(false)
        } else if (clickedButton === "delete"){
            let endpointUrl = `${BASE_URL}/reviews/${review._id}`
            deleteReview(endpointUrl)
            setShowEditReviewForm(false)
        }
    }

    const deleteReview = async(url) => {
        const response = await axios.delete(url)
    }

    function handleDelete(id){
        console.log(id)
        // let endpointUrl = `${BASE_URL}/reviews/${review._id}`
        // deleteReview(endpointUrl)
        // setShowEditReviewForm(false)
    }

return (
    <div>
        <div>
            <Form method = "post" onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail"> Name </Label>
                    <Input
                    id="exampleName"
                    name="userName"
                    defaultValue={review.userName}
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
                    defaultValue={review.text}
                    type="textarea"
                    />
                </FormGroup>
                <Button type = "submit" onClick={()=>{setClickedButton("update")}}>Update</Button>
                <Button type = "submit" onClick={()=>{setClickedButton("delete")}}>Delete</Button>
            </Form>
        </div>
        
    </div>
    
)
}

export default EditReviewForm


//onClick = {handleDelete(review._id)}