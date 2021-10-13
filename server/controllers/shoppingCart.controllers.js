const jwt = require('jsonwebtoken');
const twilio = require('twilio');
const ShoppingCart = require('../models/shoppingCart.models');
require('dotenv').config();

const productOrderShipped = (theProduct) => {
    const client = new twilio(process.env.accountSid, process.env.authToken);

    console.log("This is inside of productOrderShipped", theProduct);
    let userPhoneNumber = "+1" + theProduct.phone;

    client.messages
    .create({
        body: 'Your custom Excelsior PC will arrive in 3-4 business days. Thank you for ordering with Computerville.',
        to: userPhoneNumber, // Text this number
        from: process.env.twilioNumber, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}


module.exports = {
    getAllCartItems: (req, res) => {
        ShoppingCart.find()
            .populate("user_id")
            .populate("men_clothing")
            .populate("women_clothing")
            .then((allCartItems) => {
                console.log(allCartItems);
                res.json(allCartItems);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    createCartItem: (req, res) => {
        console.log(req.body);
        const newCartItem = new ShoppingCart(req.body);

        // Decodes cookie for user_id to associate new Product with user.
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        console.log("This is createCartItem in the backend for payload", decodedJwt.payload.user_id);
        newCartItem.user_id = decodedJwt.payload.user_id;
        console.log("This in createCartItem in the backend", newCartItem);
        ShoppingCart.create(newCartItem)
            .then((cartItem) => {
                console.log(cartItem);
                res.json(cartItem);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    sendShippingMessage: (req, res) => {
        productOrderShipped(req.body);
    }
}