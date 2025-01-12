const User = require('../models/userModel');

const register = async (req, res) => {
  console.log('Logged Request:', req.body);

  let { auth0Id, email, name, picture } = req.body;

  if (!auth0Id || !email) {
    return res.status(400).json({ message: 'auth0Id and email are required' });
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

      console.log('User created successfully');
      return res.status(201).json({ message: 'User registered successfully', user });
    }

    res.status(200).json({ message: 'User already exists', user });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { register };
