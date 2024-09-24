// controllers/ebookController.js
const EBook = require('../models/ebookModel');
const { uploadFileToS3, getSignedUrlForDownload } = require('../services/s3Service.js');


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



// Generate signed URL for download
const getEbookDownloadUrl = async (req, res) => {
  try {
    const { ebookId } = req.params;
    const ebook = await EBook.findById(ebookId);
    const userId = req.user;

    if (!ebook) {
      return res.status(404).json({ message: 'eBook not found' });
    }
    //  console.log({ebook,
    //   ebookId,
    //   userId,
    //   from: 'from downloaddeddd'});

     

    // Check if the user is authorized to download the eBook (for example, if they bought it)
    if (!userId ) {
      return res.status(403).json({ message: 'Access denied.' });
    }

    // Generate signed URL for downloading the eBook PDF
    const signedUrl = await getSignedUrlForDownload(ebook.pdfUrl);

    res.json({ downloadUrl: signedUrl });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    res.status(500).json({ message: 'Failed to generate download link' });
  }
};

const getAllEbooks = async (req,res)=>{
  try {
    const ebooks = await EBook.find({});
    res.json(ebooks);
  } catch (error) {
    console.error('Error getting all ebooks:', error);
    res.status(500).json({ message: 'Failed to get all ebooks' });
  }

}

const deleteEbookById = async (req,res)=>{
  try {
    const {id} = req.params;
    console.log(id)
    await EBook.findByIdAndDelete(id);
    res.json({message: 'Ebook deleted successfully'});
  } catch (error) {
    console.error('Error deleting ebook:', error);
    res.status(500).json({ message: 'Failed to delete ebook' });
  }
}

module.exports = {
  addEBook,
  getEbookDownloadUrl,
  getAllEbooks,
  deleteEbookById
};
