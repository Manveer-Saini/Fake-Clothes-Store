const jwt = require('jsonwebtoken');
const Item = require('../models/item.models');

    


module.exports = {
    //Get all parts.
    getAllItems: (req, res) => {
        Item.find()
            .then((allItems) => {
                console.log(allItems);
                res.json(allItems);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Get all men's clothing.
    getAllMensClothing: (req, res) => {
        Item.find({category: "men's clothing"})
            .then((allMensClothing) => {
                console.log(allMensClothing);
                res.json(allMensClothing);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Get all women's clothing.
    getAllWomensClothing: (req, res) => {
        Item.find({category: "women's clothing"})
            .then((allWomensClothing) => {
                console.log(allWomensClothing);
                res.json(allWomensClothing);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    createItem: (req, res) => {
        console.log(req.body);
        const newItem = new Item(req.body);


        Item.create(newItem)
            .then((item) => {
                console.log(item);
                res.json(item);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    myCart: (req, res) =>{
        console.log("Here is your cart.")
        Item.find({})
        .then((allItems) => res.json(allItems))
        .catch((err) =>{
            console.log("Cannot find your cart.")
            res.status(400).json(err)
        })
    },

    reviewOrder: (req, res) => {
        console.log("Review your order.")
        // We are not passing any data here, so do we need to have anything further
        // in this controller?
    }
}