// controllers/ebookController.js
const EBook = require('../models/ebookModel');
const { uploadFileToS3 } = require('../services/s3Service.js');


const addEBook = async (req, res) => {
  try {
    const { title, author, description, price, category } = req.body;

    
    // Upload cover image and PDF file to S3
    const coverImage = req.files['coverImage'][0];
    const pdfFile = req.files['pdfFile'][0];
    
    const coverImageUpload = await uploadFileToS3(coverImage);
    const pdfFileUpload = await uploadFileToS3(pdfFile);
    // console.log({
    //   coverImageUpload,
    //   pdfFileUpload,
    //   title, 
    //   author, 
    //   description, 
    //   price, 
    //   category 

    // })

    // Create new eBook document
    const newEBook = new EBook({
      title,
      author,
      description,
      category,
      price,
      coverImageUrl: coverImageUpload.Location,  
      pdfUrl: pdfFileUpload.Location,        
    });

    // Save to database
    await newEBook.save();

    res.status(201).json({ message: "eBook added successfully!", eBook: newEBook });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};





module.exports = {
  addEBook,
};
