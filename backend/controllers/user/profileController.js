const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");

const getUserProfile = async (req, res) => {
    try {
        console.log("🔹 Profile route hit!");

        // 1️⃣ Check if the token cookie is present
        console.log("🔍 Cookies received:", req.cookies);
        const token = req.cookies.token;

        if (!token) {
            console.log("❌ No token found in cookies");
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        // 2️⃣ Verify the token
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log("✅ Token decoded:", decoded);
        } catch (err) {
            console.error("❌ Token verification failed:", err.message);
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        // 3️⃣ Find the user in the database
        const user = await User.findOne({ auth0Id: decoded.auth0Id });
        if (!user) {
            console.log("❌ No user found for auth0Id:", decoded.auth0Id);
            return res.status(404).json({ message: "User not found" });
        }

        console.log("✅ User found:", user);

        // 4️⃣ Send response
        return res.status(200).json({
            message: "User profile fetched successfully",
            user,
        });

    } catch (error) {
        console.error("❌ Error fetching user profile:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = getUserProfile;
