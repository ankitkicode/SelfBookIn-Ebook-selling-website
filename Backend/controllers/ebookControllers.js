// controllers/ebookController.js
require("dotenv").config();
const EBook = require('../models/ebookModel');
const userModel = require("../models/userModel.js")
const Purchase = require("../models/purchase");
const Razorpay = require('razorpay');
const crypto = require('crypto');
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
    const user = await userModel.findById(userId);


    if (!ebook) {
      return res.status(404).json({ message: 'eBook not found' });
    }
    // Check if the user is authorized to download the eBook (for example, if they bought it)
    if (!userId ) {
      return res.status(403).json({ message: 'Access denied.' });
    }
    
    // Check if the eBook ID is already in user's yourBooks
    if (user.yourBooks.includes(ebookId)) {
      return res.status(400).json({ message: 'You have already downloaded this eBook. Go to yourebooks for reading.' });
    }
    
 // Find if the user has purchased the eBook
 const purchase = await Purchase.findOne({ userId, ebookId });

 if (!purchase) {
   return res.status(403).json({ message: 'You have not purchased this eBook.' });
 }

    
    const key = ebook.pdfUrl.split('/').pop();
    const decodedKey = decodeURIComponent(key);
  
    const signedUrl = await getSignedUrlForDownload(decodedKey);
    // Update the user's purchased books
    user.yourBooks.push(ebookId); 
    await user.save();
 
    res.json({ downloadUrl: signedUrl });

  } catch (error) {
    console.error('Error generating signed URL:', error);

    res.status(500).json({ message: 'Failed to generate download link' });
  }
};

const getAllEbooks = async (req,res)=>{
  try {
    const ebooks = await EBook.find({});
    // console.log(ebooks)
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
const likedEbook =  async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user._id; 

    // Check if the user has already liked the post
    const post = await postModel.findById(postId);
    const alreadyLikedIndex = post.likes.indexOf(userId);

    if (alreadyLikedIndex === -1) {
      // If the user hasn't liked the post, add their ID to the likes array
      post.likes.push(userId);
    } else {
      // If the user has already liked the post, remove their ID from the likes array (dislike)
      post.likes.splice(alreadyLikedIndex, 1);
    }

    // Save the post with the updated like status
    await post.save();

    // Send the updated like count along with the liked status
    const likeCount = post.likes.length;
    const liked = alreadyLikedIndex === -1; // If alreadyLikedIndex is -1, the user has just liked the post

    res.json({ liked: liked, likeCount: likeCount });
  } catch (error) {
    console.error('Error liking/disliking post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const savedEbook =  async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.session.passport.user });
    const postId = req.params.postId;

    // Check if the post is already saved
    const isSaved = user.saved.indexOf(postId);

    if (isSaved === -1) {
      // If the post is not already saved, save it
      user.saved.push(postId);
    } else {
      user.saved.splice(isSaved, 1);
    }

    await user.save();
    const save = isSaved === -1;


    // Respond with the updated user object and the saved status
    res.json({ user, saved: save });
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET 
});

const paymentEbook =  async (req, res) => {
   const { ebookId } = req.body;
   const ebook = await  EBook.findById(ebookId);
   const amount = ebook.price;

  const options = {
    amount: amount * 100, 
    currency: "INR",
    receipt: ebookId,
    notes: {
      ebookId: ebookId
    }
  };

  try {
    const order = await razorpay.orders.create(options);

    res.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Error creating order' });
  }
}

const paymentSuccess = async (req, res) => {
  try {
    const userId = req.user;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, ebookId } = req.body;

    // Verify the payment signature
    const isSignatureValid = verifyPaymentSignature(razorpay_payment_id, razorpay_order_id, razorpay_signature);

    if (!isSignatureValid) {
      return res.status(400).json({ error: 'Payment verification failed.' });
    }

    // Proceed with order processing
    const purchase = new Purchase({
      userId,
      ebookId: ebookId,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      status: 'paid',
    });

     // Save the updated user with the purchased book

    // Save the purchase record
    await purchase.save();

    res.status(200).json({ message: 'Payment successfully processed', ebookId });
  } catch (error) {
    console.error('Payment processing failed:', error);
    res.status(500).json({ error: 'An error occurred during payment processing.' });
  }
};


// Function to verify payment signature
const verifyPaymentSignature = (paymentId, orderId, signature) => {
  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(orderId + '|' + paymentId)
    .digest('hex');

  return generatedSignature === signature;
}

module.exports = {
  addEBook,
  getEbookDownloadUrl,
  getAllEbooks,
  deleteEbookById,
  likedEbook,
  savedEbook,
  paymentEbook,
  paymentSuccess
};
