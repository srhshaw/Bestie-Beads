const db = require('../db')
const Piece = require('../models/piece')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const pieces = [
        {
        image: "https://i.imgur.com/RsDlSKA.jpg",
        name: "Cloudy Rainbow",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },
        {
        image: "https://i.imgur.com/7BReYnt.jpg",
        name: "Seaside Sunset",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },
        {
        image: "https://i.imgur.com/zREDkDN.jpg",
        name: "Purple Galaxy",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },
        {
        image: "https://i.imgur.com/b9Q15rT.jpg",
        name: "Comets",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        }, 
        {
        image: "https://i.imgur.com/6ulybjL.jpg",
        name: "I Heart Sherbet",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },
        {
        image: "https://i.imgur.com/1aa60iv.jpg",
        name: "Rainbow Starburst",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },       
        {
        image: "https://i.imgur.com/apB2kD6.jpg",
        name: "U Can Do It!",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },
        {
        image: "https://i.imgur.com/tAQ2D2p.jpg",
        name: "Happy Daisy",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },    
        {
        image: "https://i.imgur.com/UhWaquK.jpg",
        name: "Shine Bright",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        }, 
        {
        image: "https://i.imgur.com/UGD3GNo.jpg",
        name: "Rainbow Vibes",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },   
        {
        image: "https://i.imgur.com/OorqxcG.jpg",
        name: "Barbie Girl",
        price: 3,
        details: ["Clay beads", "Slip-on, stretch elastic"],
        description: "Good vibes only!  The brighter the better.  Featuring a slip-on, stretch style in vibrant, fun shades.  Can be worn together with other bracelets from the collection- mix and match for your favorite combinations or share with your friends!  Each bracelet is handmade and totally unique!"
        },                           
    ]
    await Piece.insertMany(pieces)
    console.log("Created some pieces!")
}

const run = async () => {
    await main()
    db.close()
}

run()