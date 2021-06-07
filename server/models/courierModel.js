const mongoose = require("mongoose");

const courierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Courier = mongoose.model("courier", courierSchema);

module.exports = Courier;
