const mongoose = require("mongoose");
const { generateRandomString } = require("../helper/generate");
const userSchema = new mongoose.Schema(
    {
        fullname: String,
        address: Array,
        phone: String,
        email: String,
        password: String,
        token: {
            type: String,
            default: generateRandomString(20)
        },
    }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;