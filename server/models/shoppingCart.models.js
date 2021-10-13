const mongoose = require("mongoose");

const ShoppingCartSchema = new mongoose.Schema({

    men_clothing: {
        
        type: mongoose.Schema.Types.ObjectId,

        ref: "Item"
    },
    women_clothing: {
        
        type: mongoose.Schema.Types.ObjectId,

        ref: "Item"
    },
    user_id:{
        //in ref to User collection... obj Id gives us everything in that user
        type: mongoose.Schema.Types.ObjectId,

        //needs to match what we called our collection, it is case sensitive.
        //ref is able to grab ANY collection in the db
        ref: "User"
    },
}, {timestamps:true})
    //timestamps automatically create "createdAt" and"updatedAt" date and time info for each document
    //everytime a doc is updated, it will change the "updatedAt"

//Model is a combination of the 1. collectionName and 2.Schema
//Name will be collection name that's held in the db
//schema is going to be the singular of what will show as plural in the db
    const ShoppingCart = mongoose.model("ShoppingCart", ShoppingCartSchema);
//This returns a cartoon model with the collection name and that schema

module.exports = ShoppingCart;