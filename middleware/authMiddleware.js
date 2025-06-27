const tokenService = require('../services/tokenService');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Missing Authorization header' });

  const token = authHeader.split(' ')[1]; // Format: Bearer <token>
  if (!token) return res.status(401).json({ message: 'Token missing' });

  if (tokenService.isTokenRevoked(token)) {
    return res.status(403).json({ message: 'Token has been revoked' });
  }

  try {
    const decoded = tokenService.verifyToken(token);

    // Check tenant context matches
    if (decoded.tenant !== req.tenantId) {
      return res.status(403).json({ message: 'Token tenant mismatch' });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
