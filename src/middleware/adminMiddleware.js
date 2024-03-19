const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY
const admin = process.env.ADMIN_EMAIL

const adminMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    token = token.substring(7);
    console.log(token)
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
      const decoded = jwt.verify(token, secretKey);
      req.userData = decoded;
      console.log(decoded, admin)
      if (decoded.userId !== admin) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = adminMiddleware;