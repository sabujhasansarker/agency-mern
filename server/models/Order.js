const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
   name: String,
   email: String,
   details: String,
   price: String,
   file: String,
});

module.exports = model("Order", orderSchema);
