const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userInfo: {
      user_id: mongoose.Schema.Types.ObjectId,
      fullName: String,
      phone: String,
      address: String
    },
    products: [
      {
        product_id: mongoose.Schema.Types.ObjectId,
        name: String,
        unitPrice: Number,
        quantity: Number
      }
    ],
    totalPrice: Number
  }
);

const Order = mongoose.model("Order", orderSchema, "orders");

module.exports = Order;