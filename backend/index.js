const express = require("express");
var cors = require("cors");
const env = require("dotenv").config();
const bodyParser = require("body-parser");
require("./db/conn");
const port = process.env.PORT || 5002;
const Startup = require("./models/startups");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));

//

app.get("/", (req, res) => {
  res.send("Backen Side");
});

app.get("/getstartups", async (req, res) => {
  try {
    const allStartups = await Startup.find();
    // console.log(allStartups);
    res.status(200).json({ allStartups });
  } catch (error) {
    console.log("errror");
    res.status(500).json("Error in backend");
  }
});

app.post("/register", async (req, res) => {
  try {
    const {
      Date,
      StartupName,
      IndustryVertical,
      SubVertical,
      CityLocation,

      InvestorsName,
      InvestmentType,
      AmountInUSD,
    } = req.body;

    const newStarup = new Startup({
      Date,
      StartupName,
      IndustryVertical,
      SubVertical,
      CityLocation,

      InvestorsName,
      InvestmentType,
      AmountInUSD,
    });

    const registerdStartup = await newStarup.save();

    res.status(201).json({ message: "Your Startup Registered Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in backend" });
  }
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
