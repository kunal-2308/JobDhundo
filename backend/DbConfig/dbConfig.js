const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGO_URI);
        if (response) {
            console.log('DB Connected Successfully');
        } else {
            throw new Error('Error Occurred');
        }
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1); // Exit the process if the DB connection fails
    }
};

module.exports = connectDb;
