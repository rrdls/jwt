const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect("mongodb://localhost:27017/database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.listen(3333);
