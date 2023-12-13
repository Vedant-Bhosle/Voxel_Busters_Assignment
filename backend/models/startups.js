const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  StartupName: {
    type: String,
    required: true,
  },
  CityLocation: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  InvestorsName: {
    type: String,
    required: true,
  },
  IndustryVertical: {
    type: String,
    required: true,
  },
  SubVertical: {
    type: String,
    required: true,
  },
  AmountInUSD: {
    type: String,
    required: true,
  },
  InvestmentType: {
    type: String,
    required: true,
  },
});

const Startup = new mongoose.model("Startup", startupSchema);
module.exports = Startup;
