const ProductCategory = require("../models/product-category.model");



module.exports.index = async (req, res) => {
    // Lấy ra danh mục sản phẩm ứng với product

    const productByCategory = await ProductCategory.aggregate([{
        $lookup: {
            from: "products", 
            localField: "_id", 
            foreignField: "product_category_id", 
            as: "products" 
        }
    }])

    res.json({
        code: 200,
        productByCategory: productByCategory
    })

}
