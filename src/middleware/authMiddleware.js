const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY

const authMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    token = token.substring(7);
    console.log(token)
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
      const decoded = jwt.verify(token, secretKey);
      req.userData = decoded;
      next();
    } catch (error) {
        console.log(error);
      return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = authMiddleware;