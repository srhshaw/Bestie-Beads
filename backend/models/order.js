const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const orderSchema = new Schema(
    {
        userId: {type: String, required: true},
        //ref: is to Piece model
        piece: [{type: Schema.Types.ObjectId, ref: 'Piece'}],
        orderTotal: {type: Number, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true}
    },
    {timestamps: true},
)

//'Order' creates the name of the collection in the db.
module.exports = mongoose.model('Order', orderSchema)