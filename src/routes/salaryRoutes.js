const express = require('express');
const router = express.Router();
const SalaryController = require('../controllers/salaryController');
const salaryMiddleware = require('../middleware/salaryMiddleware');

router.get('/salaries', SalaryController.getAllSalaries);

router.get('/salaries/:id', SalaryController.getSalaryById);

router.post('/salaries',  SalaryController.createSalary);

router.put('/salaries/:id', SalaryController.updateSalaryById);

router.delete('/salaries/:id', SalaryController.deleteSalaryById);

module.exports = router;
