const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(express.json());
app.use(cors());

// schema design
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide a name for this product."],
    trim: true,
    unique: [true, "Name must be unique"],
    minLength: [3, "Name must be at least 3 characters."]
  }
})

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
