const Order = require('../models/order')
const Piece = require('../models/piece')
const Review = require('../models/review')
const nodemailer = require('nodemailer')
const emailConfig = require('../emailConfig')

const siteEmailService = emailConfig.siteEmailService
const siteEmailAddress = emailConfig.siteEmailAddress
const siteEmailPassword = emailConfig.siteEmailPassword
const makerEmailAddress = emailConfig.makerEmailAddress


    module.exports = { getAllOrders, getOrdersByUserId, getOneOrder, createOrder, updateOrder, deleteOrder,getAllPieces, getOnePiece, createPiece, updatePiece, deletePiece, getAllReviews, getReviewsByPieceId, getReviewsByUserId, getOneReview, createReview, updateReview, deleteReview
}

//ORDER
async function getAllOrders(req, res) {
    try{
        const orders = await Order.find()
        res.json(orders)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOrdersByUserId(req, res){
    try{
        const id = req.params.id
        //.populate!!!
        const orders = await Order.find({userId: id}).populate('piece').exec();
        res.json(orders)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function getOneOrder(req, res){
    try{
        const id = req.params.id
        const order =  await Order.findById(id)
        if (order){
            return res.json(order)
        }
        return res.status(404).send('Order with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createOrder(req, res){
    console.log("create order")
    try{
        const order =  await new Order(req.body)
        await order.save()

        const transporter = nodemailer.createTransport({
            service: siteEmailService,
            auth: {
                user: siteEmailAddress,
                pass: siteEmailPassword
            }
        })

        const mailOptions = {
            from: siteEmailAddress,
            to: makerEmailAddress,
            subject: 'New Bestie Beads order!',
            text: 'A new Bestie Beads order has been submitted online.  Please check the order database.'
        }

        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
            }else{
                console.log("Email sent: " + info.response)
            }
        })

        return res.status(201).json({
            order
        })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOrder(req, res) {
    try{
        const id = req.params.id
        const order = await Order.findByIdAndUpdate(id, req.body, {new: true})
        if (order) {
            return res.status(200).json(order)
        }
        throw new Error("Order not found.")
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function deleteOrder(req, res) {
    try{
        const id = req.params.id
        let order = await Order.findByIdAndDelete(id)
        if (order) {
            return res.status(200).send("Order deleted.")
        }
        throw new Error("Order not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//PIECE
async function getAllPieces(req, res) {
    try{
        const pieces = await Piece.find()
        res.json(pieces)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function getOnePiece(req, res) {
    try{
        const id =  req.params.id
        const piece = await Piece.findById(id)
        if (piece) {
            return res.json(piece)
        }
        return res.status(404).send('Piece with the specified Id does not exist.')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function createPiece(req, res) {
    try{
        const piece = await Piece.create(req.body)
        return res.status(201).json({
            piece
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updatePiece(req, res) {
    try{
        const id = req.params.id
        const piece = await Piece.findByIdAndUpdate(id, req.body, {new: true})
        if (piece) {
            return res.status(200).json(piece)
        }
        throw new Error("Piece not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deletePiece(req, res) {
    try{
        const id =  req.params.id
        const piece = await Piece.findByIdAndDelete(id)
        if (piece) {
            return res.status(200).send("Piece deleted.")
        }
        throw new Error("Piece not found.")
    } catch (error) {
        return req.status(500).send(error.message)
    }
}

//REVIEW
async function getAllReviews(req, res) {
    try{
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function getReviewsByPieceId(req, res){
    try{
        const id =  req.params.id
        const reviews = await Review.find({piece: id}, 'userName text').exec();
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getReviewsByUserId(req, res){
    try{
        const id = req.params.id
        //.populate!!!
        const reviews = await Review.find({userId: id}).populate('piece').exec();
        res.json(reviews)
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function getOneReview(req, res) {
    try{
        const id = req.params.id
        const review = await Review.findById(id)
        if (review) {
            return res.json(review)
        }
        return res.status(404).send("Review with the specified ID does not exist.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createReview(req, res) {
    try{
        const review = await Review.create(req.body)
        return res.status(201).json({
            review
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateReview(req, res) {
    try{
        const id = req.params.id
        const review = await Review.findByIdAndUpdate(id, req.body, {new: true})
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error("Review not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteReview(req, res) {
    try{
        const id = req.params.id
        const review = await Review.findByIdAndDelete(id)
        if (review) {
            return res.status(200).send("Review deleted.")
        }
        throw new Error("Review not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}