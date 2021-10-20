const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    district: {
        type: String,
        required: true
    },
    mallCode: {
        type: Number,
        required: true
    },
    mallName: {
        type:String,
        required: true
    },
    itemName: {
        type: String,
        required: true  
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true
    }
})

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
