const mongoose = require("mongoose");

const rentalRequestSchema = new mongoose.Schema({
  boat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Boat"
  },
  applicantName: String,
  email: String,
  message: String,
  status: {
    type: String,
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("RentalRequest", rentalRequestSchema);
