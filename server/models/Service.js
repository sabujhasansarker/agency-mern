const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
   id: IDString,
   title: String,
   icon: String,
   admin: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
   },
});

module.exports = model("Service", serviceSchema);
