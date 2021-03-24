const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const mongoose = require("mongoose");
const productsRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/order");
require("dotenv").config();
const port = process.env.PORT || 4000;
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/public/uploads" , express.static(__dirname + "/public/uploads"))


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


//handling requests
app.use('/api/products', productsRoutes)
app.use('/api/orders', orderRoutes)


// Starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
