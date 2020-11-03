const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    first_name:  {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    password: {
        type: {String, Number},
        required: true,
        select: false,
    },
    tel:  {
        type: Number,
        required: true,
    },
    bankID: {
        type: Number,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    }
});


const OrderModel = mongoose.model('shop', OrderSchema);

module.exports = OrderModel;