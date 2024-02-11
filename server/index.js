const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectdb = require("./config/dbconnect");
const dotenv = require("dotenv").config();
const users = require("./model/usermodel");

connectdb();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email });
  if (user) {
    if (user.password === password) {
      res.json("Success");
    } else {
      res.json("Incorrect email or password");
    }
  } else {
    res.json("No record");
  }
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.json("No data");
  } else {
    users
      .create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
