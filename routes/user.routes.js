const express = require('express');
const router = express.Router();
const isLogged = require('../middleware/isLogged');

router.get('/logged', isLogged, (req, res) => {
  console.log('USER:', req.user);
  res.render('logged', { user: req.user });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.send('<h1>Profile Page</h1>');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.send('<h1>Profile Settings Page</h1>');
});

module.exports = router;
