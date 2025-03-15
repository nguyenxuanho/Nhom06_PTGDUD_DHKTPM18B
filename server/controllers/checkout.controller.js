// const Product = require("../models/product");
const Order = require("../models/order.model");

// [POST] /order/checkout
module.exports.order = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({
    code: 200,
    order_id: order._id
  })
}

// [GET] /order/:order_id
module.exports.detail = async (req, res) => {
  try {
    const order = await Order.findOne({_id: req.params.order_id})
    res.json({
      code: 200,
      data: order
    })
    
  } catch (error) {
    res.json({
      code: 400,
      message: "Not found data"
    })
  }
}
