// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const adminMiddleware = require('../middleware/adminMiddleware');

// GET all users
router.get('/users', adminMiddleware, UserController.getAllUsers);

// GET a single user by ID
router.get('/users/:id', adminMiddleware, UserController.getUserById);

// POST create a new user
router.post('/users', adminMiddleware, UserController.createUser);

// PUT update a user by ID
router.put('/users/:id', adminMiddleware, UserController.updateUserById);

// DELETE delete a user by ID
router.delete('/users/:id', adminMiddleware, UserController.deleteUserById);

module.exports = router;
