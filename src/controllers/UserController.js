const User = require("../models/User");

class UserController {
  async create(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.create({ email, password });
      const { _id } = user;
      return res.json({ _id });
    } catch (error) {
      if (error.code === 11000) {
        res.json({ message: "This email already exists" });
      }
    }
  }
}
module.exports = new UserController();
