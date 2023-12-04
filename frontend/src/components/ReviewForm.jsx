import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
// import './PiecePage.css'
import { BASE_URL } from "../globals"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 

const ReviewForm = () => {
    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
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