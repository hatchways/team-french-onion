const cloudinary = require("cloudinary").v2;
require('dotenv').config();

const { CLOUDINARY_API_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_API_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure:true
});

module.exports = { cloudinary };