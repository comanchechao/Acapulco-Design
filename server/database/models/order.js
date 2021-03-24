const { Schema, model, Mongoose, now } = require("mongoose");

// ref to product model to connect two models
//will activate the populate function in "api/order.js line::12"
const OrderSchema = new Schema({
  orderItems: [{
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'orderItem',
    required: true
  }],
  shippingAddress: {
    type: String,
    required: true
  }, 
  city: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true
  },
  status:{
    type: String,
    required: true,
    default: "Pending"
  },
  totalPrice: {
    type: Number
  },
  orderedDate: {
    type: Date,
    default: Date.now
  }
  //User model configuration from the firebase

});

const Order = model("Order", OrderSchema);

module.exports = Order;
