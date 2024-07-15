const express = require("express");
const router = express.Router();
const catchAsyncError = require("../Middleware/catchAsynErrors");
const ErrorHandler = require("../Utils/ErrorHandler");
const sendMail = require("../Utils/sendMail");

router.route("/contact-form").post(
  catchAsyncError(async (req, res, next) => {
    try {
      const { Name, email,number, message } = req.body;

      const data = `
         Name: ${Name}
        Email: ${email}
        number:${number}
        Message: ${message}`;

      await sendMail({
        email: email,
        subject: "Enquiry",
        message: data,
      });

      res.status(200).json({
        success: true,
        message: "Thank you for giving your response!!",
      });
    } catch (error) {
      console.error("Error sending email:", error); 
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
