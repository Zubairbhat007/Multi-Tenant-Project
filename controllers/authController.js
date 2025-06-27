const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getTenantConnection = require('../config/dbManager');
const createUserModel = require('../models/userModel');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const tenantId = req.tenantId;
    const connection = await getTenantConnection(tenantId);
    const User = createUserModel(connection);

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tenantId = req.tenantId;
    const connection = await getTenantConnection(tenantId);
    const User = createUserModel(connection);

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id, tenantId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login failed' });
  }
};
