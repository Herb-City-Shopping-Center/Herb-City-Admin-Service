const asyncHandler = require("express-async-handler");
const Order = require("../models/oederModal");
const { green } = require("colors");

const getAllOrders = asyncHandler(async (req, res) => {

    const orders = await Order.find();

    if(orders) {
        console.log("product fetched".green.bold);
        res.status(201).json({
            Orders: orders,
        });
    } else {
        console.log("Failed fetch orders !!!".red.bold);
        res.status(400).json({
            error: "Failed to fetch orders !!!",
        });
        throw new error("Failed to fetch orders !!!");
    }
    
});

module.exports = {getAllOrders};