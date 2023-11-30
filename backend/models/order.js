const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const orderSchema = new Schema(
    {
        userId: {type: String, required: true},
        //ref: is to Piece model
        piece: [{type: Schema.Types.ObjectId, ref: 'Piece'}],
        orderPrice: [{type: Number, required: true}],
        contactInfo: {type: String, required: true}
    },
    {timestamps: true},
)

//'Order' creates the name of the collection in the db.
module.exports = mongoose.model('Order', orderSchema)