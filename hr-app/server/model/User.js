const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: String,
  accountType: String,
});

module.exports = mongoose.models.Users || mongoose.model("User", userSchema);
