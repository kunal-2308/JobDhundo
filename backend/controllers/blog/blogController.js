const Blog = require("../../models/blogModel.js");
const jwt = require("jsonwebtoken");

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, description, category, tags, links } = req.body;
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized", status: false });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const authorId = decoded.companyEmail; // Assuming user ID is stored in the token

    const newBlog = new Blog({
      title,
      description,
      author: authorId,
      category,
      tags,
      links,
    });

    await newBlog.save();
    return res.status(201).json({ message: "Blog created successfully", status: true, newBlog });

  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found", status: false });
    }

    return res.status(200).json({ message: "Blog deleted successfully", status: true });

  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// View all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "companyEmail");
    return res.status(200).json({ blogs, status: true });

  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// View a particular blog
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate("author", "companyEmail");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found", status: false });
    }

    return res.status(200).json({ blog, status: true });

  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// View all blogs posted by the logged-in user
const getUserBlogs = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized", status: false });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.companyEmail;

    const userBlogs = await Blog.find({ author: userId });
    return res.status(200).json({ userBlogs, status: true });

  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized", status: false });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.companyEmail;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found", status: false });
    }

    if (blog.author.toString() !== userId) {
      return res.status(403).json({ message: "You are not authorized to update this blog", status: false });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ message: "Blog updated successfully", updatedBlog, status: true });

  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

// Get latest 3 blogs
const getLatestBlogs = async (req, res) => {
  try {
    const latestBlogs = await Blog.find().sort({ datePosted: -1 }).limit(3);
    return res.status(200).json({ latestBlogs, status: true });

  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  getUserBlogs,
  updateBlog,
  getLatestBlogs,
};
