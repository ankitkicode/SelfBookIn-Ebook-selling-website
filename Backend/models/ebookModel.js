const mongoose = require('mongoose');

const EbookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String, 
    required: true,
  },
  pdfUrl: {
    type: String, 
    required: true,
  },
  rating: {
    type: Number,
    default: 0, 
  },
  likes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
],
  salesCount: {
    type: Number,
    default: 0, 
  },
  uploadDate: {
    type: Date,
    default: Date.now, 
  }

});

module.exports = mongoose.model('Ebook', EbookSchema);
