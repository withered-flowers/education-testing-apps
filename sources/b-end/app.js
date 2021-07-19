// create an express app
const express = require("express");
const app = express();

const { User } = require("./models/index");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// POST /register
app.use("/register", (req, res) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then((user) => {
      res.status(201).json({
        code: 201,
        data: "success create user",
        user_id: user.id,
      });
    })
    .catch((err) => {
      res.status(400).json({ code: 400, msg: "Bad Request" });
    });
});

// supaya bisa terbaca oleh test maka app harus diexport
module.exports = app;
