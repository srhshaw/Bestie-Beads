const db = require('../db')
const Order = require('../models/order')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const orders = [
        {
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            piece: ["6566b08bb1acf4b85ae0eb16", "6566b08bb1acf4b85ae0eb20"],
            orderPrice: [3, 4],
            contactInfo: "Margot M. 2 Cousin St. Austin, TX 78758 512-512-5121",
        },
        {
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb7d',
            piece: ["6566b08bb1acf4b85ae0eb1d"],
            orderPrice: [3],
            contactInfo: "Rylee H. 11111 Bwood Dr. Austin, TX 78726 215-215-2152",
        },
        {
            userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb8d',
            piece: ["6566b08bb1acf4b85ae0eb17", "6566b08bb1acf4b85ae0eb18", "6566b08bb1acf4b85ae0eb19"],
            orderPrice: [3, 3, 4],
            contactInfo: "Addy R. 22222 Cland Dr. Austin, TX  78726 152-152-1521",
        },
    ]
    await Order.insertMany(orders)
    console.log('Created some orders!')
}   

const run = async () => {
    await main()
    db.close()
}

run()