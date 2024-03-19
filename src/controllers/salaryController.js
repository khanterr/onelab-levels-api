// controllers/SalaryController.js
const Salary = require('../models/salaryModel');

module.exports = {
  // GET all salaries
  getAllSalaries: async (req, res) => {
    try {
      const salaries = await Salary.find();
      res.json(salaries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  // GET a single salary by ID
  getSalaryById: async (req, res) => {
    try {
      const salary = await Salary.findById(req.params.id);
      if (!salary) {
        return res.status(404).json({ message: 'Salary not found' });
      }
      res.json(salary);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // POST create a new salary
  createSalary: async (req, res) => {
    try {
      const salary = new Salary(req.body);
      await salary.save();
      res.status(201).json(salary);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // PUT update a salary by ID
  updateSalaryById: async (req, res) => {
    try {
      const salary = await Salary.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!salary) {
        return res.status(404).json({ message: 'Salary not found' });
      }
      res.json(salary);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // DELETE delete a salary by ID
  deleteSalaryById: async (req, res) => {
    try {
      const salary = await Salary.findByIdAndDelete(req.params.id);
      if (!salary) {
        return res.status(404).json({ message: 'Salary not found' });
      }
      res.json({ message: 'Salary deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
