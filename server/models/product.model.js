const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const productSchema = new mongoose.Schema(
  {
    title: String,
    product_category_id: mongoose.Schema.Types.ObjectId,
    description: 
      {
          CPU: String,
          RAM: String,
          VGA: String,
          Type: String,
          Spec: String,
          Size: String,
          Resolution: String,
          Panel: String,
          Software: String,
          License: String,
          Features: String
      }, 
    price: Number,
    discount: Number,
    slug: {
      type: String,
      slug: "title",
      unique: true
    }
  }
);


const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;