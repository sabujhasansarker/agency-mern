const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
   email: String,
});

module.exports = model("Admin", AdminSchema);
