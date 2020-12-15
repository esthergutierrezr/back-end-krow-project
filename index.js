const express = require("express");

const connection = require("./config");

const app = express();

const port = 5000;

app.use(express.json());

// We try to connect to the Database
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Database Connected`);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is runing on ${port}`);
  }
});
