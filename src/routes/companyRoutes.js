const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');
const adminMiddleware = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/companies', authMiddleware, CompanyController.getAllCompanies);

router.get('/companies/:id', authMiddleware, CompanyController.getCompanyById);

router.post('/companies', adminMiddleware, CompanyController.createCompany);

router.put('/companies/:id', adminMiddleware, CompanyController.updateCompanyById);

router.delete('/companies/:id', adminMiddleware, CompanyController.deleteCompanyById);

module.exports = router;
