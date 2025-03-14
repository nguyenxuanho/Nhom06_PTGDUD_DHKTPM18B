const RouterProduct = require('./product.router')
const RouterHome = require('./home.router')

const userRoutes = require("./user.route");

const checkoutRoutes = require("./checkout.route");

module.exports = (app) => {
    app.use('/', RouterHome);
    app.use("/users", userRoutes);
    app.use('/products', RouterProduct);
    app.use("/order", checkoutRoutes);
}