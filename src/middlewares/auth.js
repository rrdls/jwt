const jwt = require("jsonwebtoken");
require("dotenv/config");
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    return next();
  } catch (err) {
    return res.status(401).send({ message: "Token expired" });
  }
};
