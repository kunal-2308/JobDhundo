const express = require("express");
const { createBlog, deleteBlog, getAllBlogs, getBlogById, getUserBlogs, updateBlog, getLatestBlogs } = require("../controllers/blog/blogController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware"); // For protected routes

router.post("/create", authMiddleware, createBlog); // Create Blog (Auth required)
router.delete("/:id", authMiddleware, deleteBlog); // Delete Blog (Auth required)
router.get("/", getAllBlogs); // View All Blogs
router.get("/:id", getBlogById); // View Specific Blog
router.get("/user/:userId", authMiddleware, getUserBlogs); // View User's Blogs
router.put("/:id", authMiddleware, updateBlog); // Update Blog
router.get("/latest", getLatestBlogs); // Get Latest 3 Blogs

module.exports = router;
