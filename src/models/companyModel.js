const mongoose = require('mongoose');
const Location = require('./locationModel')

const companySchema = new mongoose.Schema({
    name: String,
    location: Location.schema,
});

module.exports = mongoose.model('Company', companySchema);