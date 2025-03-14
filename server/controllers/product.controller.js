const Product = require("../models/product.model.js")

const ProductCategory = require("../models/product-category.model.js");


// [GET] products/category/:slug
module.exports.index = async (req, res) => {
  const productCategory = await ProductCategory.findOne({ slug: req.params.slug })

  let filter = {}

  let filterQuery = {
    product_category_id: productCategory._id,
  };

  let min;
  let max;
  let isPrice = 0;

  if (req.query.filterProduct) {
    let filterProducts = req.query.filterProduct.split(",");
    if (filterProducts.length > 0)
      filterProducts.forEach(filterProduct => {
        const keyFilter = filterProduct.split("_")[0]
        const valueFilter = filterProduct.split("_")[1]
        if (keyFilter === "price") {
          const lowerValue = +valueFilter.split("-")[0]
          const upperValue = +valueFilter.split("-")[1]
          isPrice = 1;

          if (min === undefined) {
            min = lowerValue;
          }

          if (max === undefined) {
            max = upperValue;
          }

          if (min !== undefined && max !== undefined) {
            min = Math.min(lowerValue, min)
            max = Math.max(upperValue, max)
          }


        } else {
          if (!filter[keyFilter]) {
            filter[keyFilter] = [];
          }
          filter[keyFilter].push(valueFilter);
        }
      })
    if (isPrice === 1) {
      filter["price"] = min + "-" + max
    }
  }
  
  let sort = {};

  if (filter.price) {
    let [minPrice, maxPrice] = filter.price.split("-").map(Number);
    filterQuery.price = { $gte: minPrice * 1000000, $lte: maxPrice * 1000000};
  }

  if (filter.CPU) {
    filterQuery['description.CPU'] = { $regex: filter.CPU.join('|'), $options: 'i' };

  }

  if (filter.RAM) {
    filterQuery['description.RAM'] = { $regex: filter.RAM.join('|'), $options: 'i' };
  }


  if (req.query.filter) {
    const key = req.query.filter.split("_")[0];
    const value = req.query.filter.split("_")[1];
    sort[key] = value
  }


  const count = await Product.find(filterQuery).count();
  
  const limitPage = 8;
  const totalPage = Math.ceil(count / limitPage);
  const currentPage = +req.query.currentPage ? +req.query.currentPage : 1;
  const skipPage = (currentPage - 1) * limitPage;

  const pagination = {
    currentPage: currentPage,
    limitPage: limitPage,
    totalPage: totalPage,
    skipPage: skipPage
  }

  const products = await Product.find(filterQuery).skip(skipPage).limit(limitPage).sort(sort)

  res.json({
    code: 200,
    products: products,
    pagination: pagination
  })


}


// [GET] products/search/:keyword
module.exports.search = async (req, res) => {

  let find = {
    title: ""
  }

  if (req.params.keyword) {
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
  const product = await Product.findOne({ slug: req.params.slug });
  const productCategory = await ProductCategory.findOne({ _id: product.product_category_id });
  const listProductByCategory = await Product.find({ product_category_id: productCategory._id });
  return res.json({
    code: 200,
    product: product,
    productCategory: productCategory,
    listProductByCategory: listProductByCategory
  })
};