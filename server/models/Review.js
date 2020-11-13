const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
   displayName: String,
   designation: String,
   des: String,
});

module.exports = model("Review", reviewSchema);
