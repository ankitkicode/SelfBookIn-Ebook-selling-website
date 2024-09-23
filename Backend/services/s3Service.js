// services/s3Service.js
const s3 = require('../config/awsConfig'); 
const fs = require('fs');

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

module.exports = {
  uploadFileToS3,
};
