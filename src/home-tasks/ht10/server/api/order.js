const { Router } = require('express');
const fs = require('fs');
const orderValidator = require("../validators/order-validator");
const OrderModel = require('../models/order');


const orderRouter =  Router();

orderRouter.get('/', async (req, res) => {
    const orders = await OrderModel.find({});
    res.send(orders);
});

// orderRouter.get("/", function (req, res) {
//     const orders = JSON.parse(fs.readFileSync(`${__dirname}/order.json`));
//     res.json(orders);
// });

orderRouter.post("/", async (req, res) => {
        const order = new OrderModel(req.body);
        const { _id } = await order.save();
        res.status(201).send({create_order_id: _id});
    }
);

orderRouter.get('/:orderId', async (req, res) => {
    const order = await OrderModel.findById(req.params.orderId);
    res.send(order);
});

orderRouter.put('/:orderId', async (req, res) => {
    const result = await OrderModel.findByIdAndUpdate(req.params.orderId, req.body);
    res.status(200).send(result);
});

orderRouter.delete('/:orderId', async (req, res) => {
    const result = await OrderModel.findByIdAndDelete(req.params.orderId, req.body);
    res.status(200).send(result);
});

module.exports = orderRouter;