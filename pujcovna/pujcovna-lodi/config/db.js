const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB pripojena");
  } catch (error) {
    console.error("Chyba pripojeni:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
