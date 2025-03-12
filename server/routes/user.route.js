const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");
// const validate = require("../../validates/client/user.validate");

// const authMiddleware = require("../middlewares/client/auth.middleware");

router.post("/register", controller.registerPost);

// router.get("/info",  controller.info);


router.post("/login", controller.loginPost);

router.get("/logout", controller.logout);

router.get("/infor", controller.getUserByToken);

router.patch("/:id", controller.updateUser);

router.patch("/password/:id", controller.changePassword);





// router.get("/password/forgot", controller.forgotPassword);

// router.post("/password/forgot", validate.forgotPasswordPost, controller.forgotPasswordPost);


// router.get("/password/otp", controller.otpPassword);

// router.post("/password/otp", controller.otpPasswordPost);

// router.get("/password/reset", controller.resetPassword);

// router.post(
//   "/password/reset",
//   validate.resetPasswordPost,
//   controller.resetPasswordPost
// );



module.exports = router;