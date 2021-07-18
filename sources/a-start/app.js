// create an express app
const express = require("express");
const app = express();

// create variable port 10000
const port = process.env.PORT || 10000;

// use urlencoded parser
app.use(express.urlencoded({ extended: false }));

// use json parser
app.use(express.json());

// listen port 10000
app.listen(port, () => {
  console.log("App listening on port", port);
});
