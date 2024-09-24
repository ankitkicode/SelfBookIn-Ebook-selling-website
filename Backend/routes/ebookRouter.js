// routes/ebookRoutes.js
const express = require('express');
const router = express.Router();
const { addEBook, getEbookDownloadUrl, getAllEbooks, deleteEbookById } = require('../controllers/ebookControllers');
const multer = require('multer');
const auth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Route for adding an eBook
// Handle both cover image and pdf file uploads
router.post('/add-ebook',auth, isAdmin, upload.fields([{ name: 'coverImage' }, { name: 'pdfFile' }]), addEBook);


// Route to get a signed URL for eBook download
router.get('/download/:ebookId', auth, getEbookDownloadUrl);
router.get('/',auth,isAdmin,getAllEbooks);
router.delete('/:id',auth,isAdmin,deleteEbookById);

module.exports = router;
