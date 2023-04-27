const express = require("express");
const router = express.Router();
const { getAllProduct } = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

router.route("/getAllOrders").post(getAllOrders);

module.exports = router;