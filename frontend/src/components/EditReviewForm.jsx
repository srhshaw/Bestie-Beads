import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 
import './EditReviewForm.css'

const EditReviewForm = ({review, setReview_IdInEdit}) => {
    const [clickedButton, setClickedButton] = useState("")

    const updateReview = async(url, object) => {
        const response = await axios.put(url, object)
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
            setReview_IdInEdit(null)
        } else if (clickedButton === "delete"){
            let endpointUrl = `${BASE_URL}/reviews/${review._id}`
            deleteReview(endpointUrl)
            setReview_IdInEdit(null)
        }
    }

    const deleteReview = async(url) => {
        const response = await axios.delete(url)
    }

return (
    <div className="editReviewForm">
        <Form className= "form" method = "post" onSubmit = {handleSubmit}>
            <FormGroup>
                <Label for="exampleEmail"> Name </Label>
                <Input
                id="nameField"
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
                id="reviewTextField"
                name="text"
                defaultValue={review.text}
                type="textarea"
                />
            </FormGroup>
            <div className="formButtons">
                <Button className= "editReviewFormButton" type = "submit" onClick={()=>{setClickedButton("update")}}>Update</Button>
                <Button className= "editReviewFormButton" type = "submit" onClick={()=>{setClickedButton("delete")}}>Delete</Button>
            </div>
        </Form>
    </div>
)
}

export default EditReviewForm