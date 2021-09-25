const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true, maxlength: 128 },
  description: { type: String, required: true },
  status: { type: String, required: true, maxlength: 16 },
  price: { type: String, required: true },
  cantidad: { type: String, required: true },
  category: { type: String, required: true, maxlength: 128 },
  subcategory: { type: String, required: true, maxlength: 128 },
  photo: { type: String, required: true },
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema);
