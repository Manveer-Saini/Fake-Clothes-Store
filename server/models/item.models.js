const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id: {
        type: Number,
    
        required: [true, "Id must be specified for the item."],
        
    },
    title: {
        type: String,
    
        required: [true, "Title must be specified for the item."],
    },
    price: {
        type: Number,
    
        required: [true, "Price must be specified for the item."],
        
    },
    category: {
        type: String,
    
        required: [true, "Category must be specified for the item."],
        enum: [
            "men's clothing",
            "women's clothing"
        ] 
    },
    description: {
        type: String,
    
        required: [true, "Description must be specified for the item."],
    },
    image: {
        type: String,
    
        required: [true, "Image URL must be specified for the item."],
    },
}, {timestamps:true})

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;