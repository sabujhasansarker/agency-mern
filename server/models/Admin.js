const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
   name: String,
   email: String,
   profilePic: String,
});

module.exports = model("admin", AdminSchema);
