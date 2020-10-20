const mongoose = require("mongoose");
const url = require("config").get("mongoUrl");

module.exports = async () => {
   try {
      mongoose.connect(url, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useFindAndModify: false,
      });
      console.log("mogodb connected");
   } catch (err) {
      console.log(err.message);
      process.exit(1);
   }
};
