const express = require("express");
const router = express.Router();

const controller = require("../controllers/checkout.controller");

router.post("/checkout", controller.order);

router.get("/:order_id", controller.detail);


module.exports = router;