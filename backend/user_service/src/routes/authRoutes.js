//authRoutes.js
const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});


router.post('/signin', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Authenticated successfully', user: req.user });
});

module.exports = router;
