const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModal");
const { green } = require("colors");

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();

  if (orders) {
    console.log("Product fetched!!!".green.bold);
    //send data to frontend in json format
    res.send(orders);
  } else {
    console.log("Failed fetch products !!!".red.bold);
    //send error message to frontend
    res.status(400).json({
      error: "Failed to fetch products !!!",
    });
    throw new error("Failed to fetch products !!!");
  }
});

const confirmOrder = asyncHandler(async (req, res) => {

  const {id} = req.body;

  const order = await Order.findByIdAndUpdate(id, {
    orderStatus:"Confirmed",
  });

  if (order) {
    console.log("Order Confirmed!!!".green.bold);
    //send data to frontend in json format
    res.send(order);
  } else {
    console.log("Failed to confirm order !!!".red.bold);
    //send error message to frontend
    res.status(400).json({
      error: "Failed to confirm order !!!",
    });
    throw new error("Failed to confirm order !!!");
  }
});

module.exports = {
  getAllOrders,
  confirmOrder,
};
