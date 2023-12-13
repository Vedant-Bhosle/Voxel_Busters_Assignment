const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/startupdata")
  .then(() => {
    console.log("Database connection successful!!");
  })
  .catch((e) => {
    console.log("Database is not connected!");
  });
