const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model (Author)
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now, // Automatically set to current timestamp
  },
  category: {
    type: String,
    required: true,
    enum: ["Technology", "Health", "Education", "Business", "Other"], // Example categories
  },
  tags: {
    type: [String], // Array of tags
    default: [],
  },
  links: {
    type: [String], // Optional array of links
    default: [],
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
