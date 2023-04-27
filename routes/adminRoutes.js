const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  confirmOrder,
} = require("../controllers/adminController");

router.route("/getAllOrders").post(getAllOrders);
router.route("/confirmOrder").post(confirmOrder);

module.exports = router;
