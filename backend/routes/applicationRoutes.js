const express = require("express");
const { applyJob, getUserApplications, updateApplicationStatus } = require("../controllers/application/applicationController");
const router = express.Router();

router.post("/apply", applyJob); // Apply for Job
router.get("/user/:userId", getUserApplications); // Get User's Applications
router.put("/:id", updateApplicationStatus); // Update Application Status

module.exports = router;
