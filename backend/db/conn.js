const mongoose = require("mongoose");
const env = require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connection successful!!");
  })
  .catch((e) => {
    console.log("Database is not connected!");
  });
