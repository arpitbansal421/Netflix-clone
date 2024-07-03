const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const databaseConnection = require('./utils/db');
const Router = require('./routes/userroute');
const cors = require('cors');

dotenv.config({ path: '.env' });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Static list of allowed origins


const corsOptions = {
    origin:  'http://localhost:3000',
    credentials: true
};

app.use(cors(corsOptions));

// API Routes
app.use('/api/v1/user', Router);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello coming from backend",
        success: true
    });
});

databaseConnection();
const PORT= process.env.PORT || 8000

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
