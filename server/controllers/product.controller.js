const Product = require("../models/product.model.js")
const productsHelper = require("../helper/products.js");

const ProductCategory = require("../models/product-category.model.js");
const productsCategoryHelper = require("../helper/products-category.js");


// [GET] products/category/:slug
module.exports.index = async (req, res) => {
  const productCategory = await ProductCategory.findOne({slug: req.params.slug})
  const products = await Product.find({
    product_category_id: productCategory._id
  });
  
  res.json({
    code : 200,
    products: products
  })
}


// [GET] products/search/:keyword
module.exports.search = async (req, res) => {

    let find = {
      title: ""
    }

    

    if(req.params.keyword){
        const regex = new RegExp(req.params.keyword.toString(), "i");
        find.title = regex;
    }
    // End Search


    const listProduct = await Product.find(find).limit(10);

    res.json({
      code: 200,
      listProduct: listProduct
    })
}


// [GET] /products/:slugProduct
module.exports.detail = async (req, res) => {
  const product = await Product.findOne({slug: req.params.slug});
  const productCategory = await ProductCategory.findOne({_id: product.product_category_id});
  const listProductByCategory = await Product.find({product_category_id: productCategory._id});
  return res.json({
    code: 200,
    product: product,
    productCategory: productCategory,
    listProductByCategory: listProductByCategory
  })
};


// [GET] /products/:slugCategory
module.exports.category = async (req, res) => {
  const category = await ProductCategory.findOne({
    slug: req.params.slugCategory,
    status: "active",
    deleted: false
  });

  const listSubCategory = await productsCategoryHelper.getSubCategory(category.id);

  const listSubCategoryId = listSubCategory.map(item => item.id);

  const products = await Product.find({
    product_category_id: { $in: [category.id, ...listSubCategoryId] },
    deleted: false
  }).sort({ position: "desc" });

  const newProducts = productsHelper.priceNewProducts(products);

  res.render("client/pages/product/index", {
    pageTitle: category.title,
    products: newProducts,
  });
};