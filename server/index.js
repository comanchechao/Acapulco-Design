const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const productsRoutes = require("./api/product");
// const orderRoutes = require("./api/order");
require("dotenv").config();
const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connecting to database
mongoose
  .connect(
    "mongodb+srv://Greez:wildlikegreez!@nodejs-startup.ew0ie.mongodb.net/nodejs-startup?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => console.log("connected to db"));

// Starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
