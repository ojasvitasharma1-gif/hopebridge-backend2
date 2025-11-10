const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true,
  trim: true,
  match: [/^[A-Za-z\s]+$/, "Name must contain only alphabets and spaces"],
},

  email: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Donation", donationSchema);
