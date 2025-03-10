const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('../backend/DbConfig/dbConfig');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes'); 
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDb();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


const allowedOrigins = [
    'http://localhost:5173',
    'https://jobdhundo-theta.vercel.app'
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true, 
}));

// ✅ Test Route: Check if Cookies Are Working
app.get('/api/test-cookie', (req, res) => {
    res.cookie("testToken", "testValue", {
        httpOnly: true,
        // secure: true,  // ✅ Ensures cookie is only sent over HTTPS
        sameSite: "None", // ✅ Required for cross-origin cookies
    });
    res.json({ message: "Test cookie set!" });
});

app.use('/api/v1/auth', authRoutes); //-> both user and recruiter auth
app.use('/api/v1/user', userRoutes); //contains all user routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
