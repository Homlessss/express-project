const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const cors = require("cors");

mongoose.connect(config.mongoConnectionString);

const app = express();
const PORT = 8000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server running -> PORT ${server.address().port}`);
});
