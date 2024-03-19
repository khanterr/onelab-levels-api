const express = require('express');
const router = express.Router();
const SpecializationController = require('../controllers/specializationController');
const adminMiddleware = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/specializations', authMiddleware, SpecializationController.getAllSpecializations);

router.get('/grades', authMiddleware, SpecializationController.getGrades);

router.get('/specializations/:id', authMiddleware, SpecializationController.getSpecializationById);

router.post('/specializations', adminMiddleware, SpecializationController.createSpecialization);

router.put('/specializations/:id', adminMiddleware, SpecializationController.updateSpecializationById);

router.delete('/specializations/:id', adminMiddleware, SpecializationController.deleteSpecializationById);

module.exports = router;
