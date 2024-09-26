const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  number: {
    type: String,
    required: true,
    match: [/^\d{10,15}$/, 'Please enter a valid phone number'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  yourBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
  ],
  savedEbooks: [
    {
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ebook',
      },
      savedAt: { type: Date, default: Date.now },
    },
  ],
  role: {
    type: String,
    enum: [ 'admin', 'user'],
    default: 'user',
  },
  profileImage: {
    type: String, 
    default: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid', 
  },
});

// Hash password before saving user document
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});


userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Export the User model
module.exports = mongoose.model('User', userSchema);
