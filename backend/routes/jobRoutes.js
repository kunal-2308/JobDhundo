const express = require("express");
const { createJob, getAllJobs, getJobById, deleteJob } = require("../controllers/job/jobController");
const router = express.Router();

router.post("/create", createJob); // Create Job
router.get("/", getAllJobs); // Get All Jobs
router.get("/:id", getJobById); // Get Job By ID
router.delete("/:id", deleteJob); // Delete Job

module.exports = router;
