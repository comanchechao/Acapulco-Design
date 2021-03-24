const mongoose = required("mongoose");

const orderItemSchema = mongooose.Schema({
  quantity:{
      type: Number,
      required: true
  },
  product:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product'
  }
});

exports.orderItemSchema = mongoose.model("OrderItem", orderItemSchema)
