const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi server is active");
});

app.post("/register", (req, res) => {
  //   const data = {
  //     // lastName: req.body.last_name,
  //     // email: req.body.email,
  //     // password: req.body.password,
  //     // password_confirm: req.body.confirmPassword,
  //   };
  //*******************database үүсгэх */
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log("server is active");
});
