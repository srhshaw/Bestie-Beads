const mongoose = require('mongoose')
const MONGOOSE_URL = process.env.MONGOOSE_URI||`mongodb://127.0.0.1:27017`

mongoose
    .connect(`${MONGOOSE_URL}/ecommerceSite`)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

    const db = mongoose.connection

    module.exports = db