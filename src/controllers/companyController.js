// controllers/CompanyController.js
const Company = require('../models/companyModel');

module.exports = {
  // GET all companies
  getAllCompanies: async (req, res) => {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  // GET a single company by ID
  getCompanyById: async (req, res) => {
    try {
      const company = await Company.findById(req.params.id);
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.json(company);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // POST create a new company
  createCompany: async (req, res) => {
    try {
      const company = new Company(req.body);
      await company.save();
      res.status(201).json(company);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // PUT update a company by ID
  updateCompanyById: async (req, res) => {
    try {
      const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.json(company);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // DELETE delete a company by ID
  deleteCompanyById: async (req, res) => {
    try {
      const company = await Company.findByIdAndDelete(req.params.id);
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.json({ message: 'Company deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
