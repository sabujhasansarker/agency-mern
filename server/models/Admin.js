const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
   name: String,
   email: String,
   profile: String,
});

module.exports = model(AdminSchema, "admin");
