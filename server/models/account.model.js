const mongoose = require("mongoose");
const generate = require("../helper/generate");

const accountSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  }
);

const Account = mongoose.model("Account", accountSchema, "accounts");

module.exports = Account;