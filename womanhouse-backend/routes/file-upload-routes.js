const express = require("express");

const fileUploader = require('../config/upload-setup/cloudinary');

const router = express.Router();


router.post("/upload-file",
  fileUploader.single("fileSubmission"),
  (req, res, next) => {
    // multer puts all the information about the uploaded file in "req.file"
    console.log("New FILE UPLOAD", req.file);

    if (!req.file) {
      next(new Error("No file uploaded, bruh"));
      return;
    }

    const { originalname, secure_url, format, width, height } = req.file;

    res.json({
      fileName: originalname,
      fileUrl: secure_url,
      format,
      width,
      height,
    });
  });

module.exports = router;