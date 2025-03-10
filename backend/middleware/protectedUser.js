const jwt = require('jsonwebtoken');
require('dotenv').config();

const protectedUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized: No token provided",
                status: false
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if (decoded.role !== 'User') {
            return res.status(403).json({
                message: "Forbidden: Access denied",
                status: false
            });
        }

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized: Invalid token",
            status: false,
            error: error.message
        });
    }
};

module.exports = protectedUser;
