const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('../backend/DbConfig/dbConfig');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes'); 
dotenv.config();
connectDb();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(cookieParser());

// Routes
app.use('/api/v1', authRoutes);

// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).send({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
