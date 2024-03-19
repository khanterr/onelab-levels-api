// controllers/LocationController.js
const Location = require('../models/locationModel');

module.exports = {
  // GET all locations
  getAllLocations: async (req, res) => {
    try {
      const locations = await Location.find();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  // GET a single location by ID
  getLocationById: async (req, res) => {
    try {
      const location = await Location.findById(req.params.id);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.json(location);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // POST create a new location
  createLocation: async (req, res) => {
    try {
      const location = new Location(req.body);
      await location.save();
      res.status(201).json(location);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // PUT update a location by ID
  updateLocationById: async (req, res) => {
    try {
      const location = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.json(location);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // DELETE delete a location by ID
  deleteLocationById: async (req, res) => {
    try {
      const location = await Location.findByIdAndDelete(req.params.id);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.json({ message: 'Location deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
