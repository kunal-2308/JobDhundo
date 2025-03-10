const Application = require("../models/Application");

//  Apply for Job
const applyJob = async (req, res) => {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();
        res.status(201).json({ message: "Application submitted", application: newApplication });
    } catch (error) {
        res.status(500).json({ message: "Error applying", error: error.message });
    }
};

//  Get User's Applications
const getUserApplications = async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.params.userId });
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: "Error fetching applications", error: error.message });
    }
};

//  Update Application Status
const updateApplicationStatus = async (req, res) => {
    try {
        const updatedApp = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedApp);
    } catch (error) {
        res.status(500).json({ message: "Error updating status", error: error.message });
    }
};

module.exports = { applyJob, getUserApplications, updateApplicationStatus };
