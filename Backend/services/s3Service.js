// services/s3Service.js
const s3 = require('../config/awsConfig'); 
const fs = require('fs');

// Upload file to S3
const uploadFileToS3 = (file) => {
  const fileContent = fs.readFileSync(file.path); 
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}_${file.originalname}`, 
    Body: fileContent,
    ContentType: file.mimetype,                  
  };

  return s3.upload(params).promise(); 
};

// Generate signed URL for restricted access (e.g., 10 min expiry)
const getSignedUrlForDownload = (key, expiresIn = 60 * 10) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key, // S3 file key (e.g., file name or path)
    Expires: expiresIn, // URL expiry time in seconds
  };

  return s3.getSignedUrlPromise('getObject', params); // Generate signed URL
};

module.exports = {
  uploadFileToS3,
  getSignedUrlForDownload,
};
