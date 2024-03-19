const express = require('express');
const router = express.Router();
const LocationController = require('../controllers/locationController');
const adminMiddleware = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/locations', authMiddleware, LocationController.getAllLocations);

router.get('/locations/:id', authMiddleware, LocationController.getLocationById);

router.post('/locations', adminMiddleware, LocationController.createLocation);

router.put('/locations/:id', adminMiddleware, LocationController.updateLocationById);

router.delete('/locations/:id', adminMiddleware, LocationController.deleteLocationById);

module.exports = router;
