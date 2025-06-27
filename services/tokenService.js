const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const REVOKED_TOKENS_PATH = path.join(__dirname, '../revokedTokens/list.json');

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m', // expires in 15minutes
  });
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

function isTokenRevoked(token) {
  const data = fs.existsSync(REVOKED_TOKENS_PATH)
    ? JSON.parse(fs.readFileSync(REVOKED_TOKENS_PATH))
    : [];

  return data.includes(token);
}

function revokeToken(token) {
  const data = fs.existsSync(REVOKED_TOKENS_PATH)
    ? JSON.parse(fs.readFileSync(REVOKED_TOKENS_PATH))
    : [];

  if (!data.includes(token)) {
    data.push(token);
    fs.writeFileSync(REVOKED_TOKENS_PATH, JSON.stringify(data, null, 2));
  }
}

module.exports = {
  generateToken,
  verifyToken,
  isTokenRevoked,
  revokeToken,
};
