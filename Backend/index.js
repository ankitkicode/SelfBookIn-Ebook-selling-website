require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const ebookRoutes = require('./routes/ebookRouter');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./database/dbConnection');
connectDB();
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors(
    {
        origin: 'https://selfbookin-ebook-selling-website.onrender.com',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
));





app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth',authRouter );
app.use('/api',userRouter);
app.use('/api/ebooks', ebookRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

