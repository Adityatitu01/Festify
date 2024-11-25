const mongoose = require('mongoose');
const env = require('dotenv').config();

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.DATABASE_URI);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      console.log("connection problem")
      process.exit(1);
    }
  }


  module.exports = connectDB;