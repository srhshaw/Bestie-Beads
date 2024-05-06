const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const reviewSchema = new Schema(
    {
        //ref: is to Piece model
        piece: {type: Schema.Types.ObjectId, ref: 'Piece'},
        userName: {type: String, required: true},
        userId: {type: String, required: true},
        text: {type: String, required: true}
    },
    {timestamps: true},
)

//'Review' creates the name of the collection in the db.
module.exports = mongoose.model('Review', reviewSchema)