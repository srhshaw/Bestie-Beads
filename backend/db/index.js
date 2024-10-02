const mongoose = require('mongoose')
const MONGOOSE_URL = process.env.MONGOOSE_URL||`127.0.0.1:27017`

mongoose
    .connect(`mongodb://${MONGOOSE_URL}/ecommerceSite`)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

    const db = mongoose.connection

    module.exports = db