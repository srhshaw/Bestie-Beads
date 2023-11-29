const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const pieceSchema = new Schema (
    {
        image: {type: String},
        name: {type: String, required: true},
        price: {type: Number, required: true},
        details: [{type: String}],
        description: {type: String}
    },
    {timestamps: true},
)

//'Piece' creates the name of the collection in the db.
module.exports = mongoose.model('Piece', pieceSchema)