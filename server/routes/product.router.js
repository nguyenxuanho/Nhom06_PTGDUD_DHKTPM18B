const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller')


router.get('/category/:slug', controller.index)

router.get('/search/:keyword', controller.search);

router.get("/detail/:slug", controller.detail);

module.exports = router

