const db = require('../db')
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MondoDB connection error:'))

const main = async () => {
    const reviews = [
        {
        piece: "6566b08bb1acf4b85ae0eb16",
        userName: "Yujo",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        text: "Just looking at this bracelet makes me smile.  I wear it every day."
        },
        {
        piece: "6566b08bb1acf4b85ae0eb16",
        userName: "Maya",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb7d',
        text: "This bracelet is well made.  I love the colors."
        },
        {
        piece: "6566b08bb1acf4b85ae0eb16",
        userName: "Aiobhinn",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb8d',
        text: "This bracelet goes with everything. Recommend."
        },
        {
        piece: "6566b08bb1acf4b85ae0eb17",
        userName: "Aubrey",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb9d',
        text: "My family took a trip to Gulf Shores last summer.  Whenever I catch a glimpse of my wrist, I am reminded of sunsets on the seashore and what a nice time we had there together."
        },
        {
        piece: "6566b08bb1acf4b85ae0eb17",
        userName: "Yujo",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        text: "Pink is my favorite color and the little seashell on this bracelet is so pretty!"
        },
        {
        piece: "6566b08bb1acf4b85ae0eb18",
        userName: "Maya",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb7d',
        text: "Purple is my favorite color and my school mascot is a comet so the star shows school spirit!"
        },
        {
        piece: "6566b08bb1acf4b85ae0eb20",
        userName: "Aubrey",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb9d',
        text: "I purchased this bracelet to go with my Barbie movie ensemble.  It was the perfect touch!"
        },
        {
        piece: "6566b08bb1acf4b85ae0eb20",
        userName: "Aiobhinn",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb8d',
        text: "Pink is the new black.  Get on board."
        },
        {
        piece: "6566b08bb1acf4b85ae0eb1e",
        userName: "Aubrey",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb9d',
        text: "The message behind the name of this bracelet speaks to me.  It reminds me to love who I am and just be myself."
        },
        {
        piece: "6566b08bb1acf4b85ae0eb1e",
        userName: "Yujo",
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        text: "The star is an emblem and the variegated beads make it look like it is sparkling."
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