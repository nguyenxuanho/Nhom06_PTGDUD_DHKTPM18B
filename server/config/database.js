require("dotenv").config();
const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect Success!");
  } catch (error) {
    console.log("Connect Error!");
  }
} 
