const express = require('express');
const { signup, signin } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

module.exports = router;