// controllers/SpecializationController.js
const Specialization = require('../models/specializationModel');

module.exports = {
  // GET all specializations
  getAllSpecializations: async (req, res) => {
    try {
      const specializations = await Specialization.find();
      res.json(specializations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getGrades: async (req, res) => {
    try {
      res.json(["Intern", "Junior", "Middle", "Senior", "TechLead"]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  // GET a single specialization by ID
  getSpecializationById: async (req, res) => {
    try {
      const specialization = await Specialization.findById(req.params.id);
      if (!specialization) {
        return res.status(404).json({ message: 'Specialization not found' });
      }
      res.json(specialization);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // POST create a new specialization
  createSpecialization: async (req, res) => {
    try {
      const specialization = new Specialization(req.body);
      await specialization.save();
      res.status(201).json(specialization);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // PUT update a specialization by ID
  updateSpecializationById: async (req, res) => {
    try {
      const specialization = await Specialization.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!specialization) {
        return res.status(404).json({ message: 'Specialization not found' });
      }
      res.json(specialization);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // DELETE delete a specialization by ID
  deleteSpecializationById: async (req, res) => {
    try {
      const specialization = await Specialization.findByIdAndDelete(req.params.id);
      if (!specialization) {
        return res.status(404).json({ message: 'Specialization not found' });
      }
      res.json({ message: 'Specialization deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
