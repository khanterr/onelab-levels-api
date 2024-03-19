const Salary = require("../models/salaryModel");

const salaryMiddleware = async (req, res, next) => {
    const email = req.userData.email
    try {
        const salaries = await Salary.find({ email });
        if (salaries.length >= 30) {
            return res.status(400).json({ error: "Too much records from 1 user" })
        }
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = salaryMiddleware;