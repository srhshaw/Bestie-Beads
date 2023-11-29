const db = require('../db')
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MondoDB connection error:'))

