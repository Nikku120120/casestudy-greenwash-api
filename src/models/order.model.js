const mongoose = require('mongoose');


var orderSchema = new mongoose.Schema({
    userID: {
        type: String,
    },
    status : {
        type : String,
        default : 'Pending'
    },
    carDetails : {
        colour: {
            type: String
        },
        number: {
            type: String
        },
        company: {
            type: String
        },
        model: {
            type: String
        }

    },
    orderDetails : {
        cost: {
            type: Number
        },
        Address: {
            type: String
        }
    },
  
});

mongoose.model('Order', orderSchema);