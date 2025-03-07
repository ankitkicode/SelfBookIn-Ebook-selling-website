require('dotenv').config();
const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); 
  }
};



module.exports =connectDB;
