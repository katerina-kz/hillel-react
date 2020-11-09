const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const SALT_FACTOR = 10;


const OrderSchema = new Schema({
    email:  {
        type: String,
        required: true,
    },
    password:  {
        type: String,
        required: true,
        select: false,
        set: rawPassword => bcrypt.hashSync(rawPassword, SALT_FACTOR)
    },
    first_name:  {
        type: String,
    },
    last_name: {
        type: String,
    },
    tel:  {
        type: Number,
    },
    bankId: {
        type: String,
        select: false,
    },
    address: {
        type: String,
    }
});

OrderSchema.methods.login = function (password) {
    return bcrypt.compare(password, this.password).then((result) => result)
};

const OrderModel = mongoose.model('shop', OrderSchema);

module.exports = OrderModel;