const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");

routes.post("/register", UserController.create);
routes.post("/sessions", SessionController.create);
routes.use(authMiddleware);

routes.get("/authenticated", (req, res) =>
  res.send({ message: "User authorized" })
);
module.exports = routes;
