const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  const passwordHash = await bcrypt.hash(this.password, 10);
  this.password = passwordHash;
});
const userModel = new model("User", userSchema);
module.exports = userModel;
