const mongoose = require("mongoose")
const Location = require("./locationModel")
const Specialization = require("./specializationModel")
const Company = require("./companyModel")

const salarySchema = new mongoose.Schema({
    email: String,
    location: Location.schema,
    specialization: Specialization.schema,
    company: Company.schema,
    salary: {
        base: Number,
        bonus: Number,
    },
    yoe: Number,
    yac: Number,
    grade: String,
    created: String,
});

module.exports = mongoose.model('Salary', salarySchema);