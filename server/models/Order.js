const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
   name: String,
   email: String,
   details: String,
   process: Boolean,
   price: String,
   file: String,
   service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
   },
});

module.exports = model("Order", orderSchema);
