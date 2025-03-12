const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller')


// router.get('/', controller.index)

router.get('/search/:keyword', controller.search);

// router.get("/:slug", controller.detail);
// router.get("/:slugCategory", controller.category);

// router.get("/detail/:slugProduct", controller.detail);

module.exports = router

