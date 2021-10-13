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
}