const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
   title: String,
   icon: String,
   admin: {
      type: Schema.Types.ObjectId,
      ref: "admin",
   },
});

module.exports = model("Service", serviceSchema);
