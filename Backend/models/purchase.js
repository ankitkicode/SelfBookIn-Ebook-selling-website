const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ebookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ebook', required: true },
  purchaseDate: { type: Date, default: Date.now },
  paymentId: { type: String, required: true }, 
  orderId: { type: String, required: true },   
  status: { type: String, default: 'pending' }
});

const Purchase = mongoose.model('Purchase', PurchaseSchema);

module.exports = Purchase;
