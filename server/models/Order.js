const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
   name: String,
   email: String,
   details: String,
   process: Boolean,
   price: String,
   file: String,
});

module.exports = model("Order", orderSchema);
