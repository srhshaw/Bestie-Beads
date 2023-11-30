const db = require('../db')
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MondoDB connection error:'))

const main = async () => {
    const reviews = [
        {
        piece: "6566b08bb1acf4b85ae0eb16",
        userName: "Yujo",
        date: {type: Date, required: true},
        text: "Just looking at this bracelet makes me smile.  I wear it every day."
        },
        {
        piece: "6566b08bb1acf4b85ae0eb20",
        userName: "SRH",
        date: {type: Date, required: true},
        text: "I purchased this bracelet to go with my Barbie movie ensemble.  It was the perfect touch!"
        },
        {
        piece: "6566b08bb1acf4b85ae0eb1e",
        userName: "EveryGirl",
        date: {type: Date, required: true},
        text: "The message behind the name of this bracelet speaks to me.  It reminds me to love who I am and just be myself."
        },
    ]
    await Review.insertMany(reviews)
    console.log("Created some reviews!")
}

const run = async () => {
    await main()
    db.close()
}

run()