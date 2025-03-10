const User = require("../../models/userModel");
const jwt = require("jsonwebtoken");

const COOKIE_OPTIONS = {
  httpOnly: true,
  // secure: true, // Always true in production (HTTPS)
  sameSite: "none", // Required for cross-site cookies
  maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
};

const register = async (req, res) => {
  let { auth0Id, email, name, picture } = req.body;

  if (!auth0Id || !email) {
    return res.status(400).json({ message: "auth0Id and email are required",status:false});
  }

  if (!name || name.trim().length === 0) {
    name = email;
  }

  try {
    let user = await User.findOne({ auth0Id });

    if (!user) {
      user = new User({
        auth0Id,
        email,
        userName: name,
        profilePhoto: picture,
      });
      await user.save();
    } else {
      console.log("User already exists");
    }

    const token = jwt.sign(
      { auth0Id: user.auth0Id, email: user.email,role:user.role },
      process.env.SECRET_KEY,
      { expiresIn: "10d" }
    );

    // Set the token as an HTTP-only cookie
    res.cookie("token", token, COOKIE_OPTIONS);

    return res.status(user.isNew ? 201 : 200).json({
      message: user.isNew
        ? "User registered successfully"
        : "User already exists",
      user,
    });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  let { auth0Id, email, name, picture } = req.body;

  try {
    let user = await User.findOne({ auth0Id });

    if (!user) {
      user = new User({
        auth0Id,
        email,
        userName: name || email,
        profilePhoto: picture || "",
      });
      await user.save();
    } else {
      console.log("User already exists, logging in...");
    }

    // Generate JWT token
    let token = jwt.sign(
      { auth0Id: user.auth0Id, email: user.email,role:user.role },
      process.env.SECRET_KEY,
      { expiresIn: "10d" }
    );


    // Try setting the cookie
    try {
      res.cookie("token", token, {
        httpOnly: true,
        // secure: true, 
        sameSite: "None",
        maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
      });
    } catch (cookieError) {
      console.error("❌ Error setting cookie:", cookieError.message);
    }

    // Send JSON response
    return res.status(user.isNew ? 201 : 200).json({
      message: user.isNew ? "User registered successfully" : "Login Success",
      user,
    });

  } catch (error) {
    console.error("❌ Error during login:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const logout = async(req,res) =>{
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message:"Logout success",
      status:true
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:"Error occured during logout",
      status:false
    });
  }
}

const check = async(req,res)=>{
  try {
    console.log('Test');
    return res.status(200).json({message:"Happy"});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message:error.message});
  }
}

module.exports = { register, login,check,logout};

