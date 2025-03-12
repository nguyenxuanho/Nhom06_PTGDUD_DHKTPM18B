const md5 = require("md5");
const User = require("../models/user.model");

// const ForgotPassword = require("../models/forgot-password.model");

// const generateHelper = require("../helper/generate");

// const sendMailHelper = require("../helper/sendMail");


// [POST] /users/register
module.exports.registerPost = async (req, res) => {
  
  
  const existEmail = await User.findOne({
    email: req.body.email
  });

  if (existEmail) {
    return res.json({
        message: "Email đã tồn tại trong hệ thống",
        code: 400
      })
  }

  req.body.password = md5(req.body.password);
  

  const user = new User(req.body);
  await user.save();

  res.cookie("token", user.token);

  return res.json({
    message: "Đăng ký thành công tài khoản",
    code: 200,
    data: user
  })
};



// [POST] /users/login
module.exports.loginPost = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    email: email
  });

  if (!user) {
    return res.json({
      message: "Email chưa đăng ký trong hệ thống",
      code: 400
    })
  }

  if (md5(password) !== user.password) {
    return res.json({
      message: "Mật khẩu không chính xác",
      code: 400
    });
  }


  res.cookie("token", user.token);

  return res.json({
    message: "Đăng nhập thành công",
    code: 200,
  })
};

// [GET] /users/logout
module.exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.json({code: 200, message: "Logout User"})
};

// [GET] /users/infor
module.exports.getUserByToken = async (req, res) => {
  const user = await User.findOne({token: req.cookies.token}).select("-password -token")
  return res.json({
    code: 200,
    data: user
  })
  
}


// [PATCH] /users/:id
module.exports.updateUser = async (req, res) => {
  await User.updateOne({_id: req.params.id}, req.body)
  return res.json({
    code: 200,
    message: "Cập nhật user thành công"
  })
  
}

// [PATCH] /users/password/:id
module.exports.changePassword = async (req, res) => {
  const user = await User.findOne({_id: req.params.id})
  if(md5(req.body.old_password) !== user.password){
    return res.json({
      code: 400,
      message: "Mật khẩu cũ không chính xác"
    })
  }

  await User.updateOne({_id: req.params.id}, {password: md5(req.body.new_password)})

  return res.json({
    code: 200,
    message: "Cập nhật mật khẩu thành công"
  })
  
}

// // [GET] /user/password/forgot
// module.exports.forgotPassword = async (req, res) => {
//   res.render("client/pages/user/forgot-password", {
//     pageTitle: "Lấy lại mật khẩu",
//   });
// };

// // [POST] /user/password/forgot
// module.exports.forgotPasswordPost = async (req, res) => {
//   const email = req.body.email;

//   const user = await User.findOne({
//     email: email,
//     deleted: false
//   });

//   if (!user) {
//     req.flash("error", "Email không tồn tại!");
//     res.redirect("back");
//     return;
//   }

//   // Lưu thông tin vào DB
//   const otp = generateHelper.generateRandomNumber(8);

//   const objectForgotPassword = {
//     email: email,
//     otp: otp,
//     expireAt: Date.now()
//   };

//   const forgotPassword = new ForgotPassword(objectForgotPassword);
//   await forgotPassword.save();

//   // Nếu tồn tại email thì gửi mã OTP qua email (Viết sau)
//   const subject = "Mã OTP xác minh lấy lại mật khẩu";
//   const html = `
//       Mã OTP để lấy lại mật khẩu là <b style="color: green;">${otp}</b>. Thời hạn sử dụng là 3 phút.
//     `;
//   sendMailHelper.sendMail(email, subject, html);
//   res.redirect(`/user/password/otp?email=${email}`);
// };

// // [GET] /user/info
// module.exports.info = async (req, res) => {
//   res.render("client/pages/user/info", {
//     pageTitle: "Thông tin tài khoản",
//   });
// };

// // [GET] /user/password/otp
// module.exports.otpPassword = async (req, res) => {
//   const email = req.query.email;

//   res.render("client/pages/user/otp-password", {
//     pageTitle: "Nhập mã OTP",
//     email: email,
//   });
// };

// // [POST] /user/password/otp
// module.exports.otpPasswordPost = async (req, res) => {
//   const email = req.body.email;
//   const otp = req.body.otp;

//   const result = await ForgotPassword.findOne({
//     email: email,
//     otp: otp
//   });

//   if (!result) {
//     req.flash("error", "OTP không hợp lệ!");
//     res.redirect("back");
//     return;
//   }

//   const user = await User.findOne({
//     email: email
//   });

//   res.cookie("tokenUser", user.tokenUser);

//   res.redirect("/user/password/reset");
// };



// // [POST] /user/password/reset
// module.exports.resetPasswordPost = async (req, res) => {
//   const password = req.body.password;
//   const tokenUser = req.cookies.tokenUser;

//   await User.updateOne({
//     tokenUser: tokenUser
//   }, {
//     password: md5(password)
//   });

//   res.redirect("/");
// };