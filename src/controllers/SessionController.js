const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv/config");
class SessionController {
  async create(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).send({ message: "Password Incorrect" });
    }
    // return res.send("ok");
    return res.json({
      token: jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "15s",
      }),
    });
  }
}

module.exports = new SessionController();
