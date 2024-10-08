const express = require('express')
//should PORT = process.env.MONGOOSE_URL ?
const PORT = process.env.PORT||3001
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()

const jewelryController = require('./controllers/jewelryController')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express())
app.use(express.urlencoded({extended:false}))

//USER HISTORY
//app.get('reviewhistory/:id', jewelryController.getUserReviewHistory)

//ORDERS
app.get('/orders', jewelryController.getAllOrders)
app.get('/orders/user/:id', jewelryController.getOrdersByUserId)
app.get('/orders/:id', jewelryController.getOneOrder)
app.post('/orders', jewelryController.createOrder)
app.put('/orders/:id', jewelryController.updateOrder)
app.delete('/orders/:id', jewelryController.deleteOrder)

//PIECES
app.get('/pieces', jewelryController.getAllPieces)
app.get('/pieces/:id', jewelryController.getOnePiece)
app.post('/pieces', jewelryController.createPiece)
app.put('/pieces/:id', jewelryController.updatePiece)
app.delete('/pieces/:id', jewelryController.deletePiece)

//REVIEWS
app.get('/reviews', jewelryController.getAllReviews)
app.get('/reviews/piece/:id', jewelryController.getReviewsByPieceId)
app.get('/reviews/user/:id', jewelryController.getReviewsByUserId)
app.get('/reviews/:id', jewelryController.getOneReview)
app.post('/reviews', jewelryController.createReview)
app.put('/reviews/:id', jewelryController.updateReview)
app.delete('/reviews/:id', jewelryController.deleteReview)

app.listen(PORT,() => {
    console.log(`Express server listening on port ${PORT}`)
})