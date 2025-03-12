const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userInfo: {
      user_id: mongoose.Schema.Types.ObjectId,
      fullName: String,
      phone: String,
      address: String,
      note: String,
      email: String,
    },
    products: [
      {
        product_id: mongoose.Schema.Types.ObjectId,
        name: String,
        unitPrice: Number,
        quanlity: Number
      }
    ],
    totalPrice: Number
  }
);

const Order = mongoose.model("Order", orderSchema, "orders");

module.exports = Order;