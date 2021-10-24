const Mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await Mongoose.connect(process.env.DB_URI || ` mongodb+srv://admin:admin123@cluster0.hhfn5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    console.log("Database is connected")
  } catch (error) {
    console.log("Database is not connected")
  }
};
module.exports = connectDB;