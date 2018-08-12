const express = require('express');
const authoriseRouter = express.Router();
const { login, authorizeGuest, logout } = require('../unifi');

module.exports = () => {
  authoriseRouter.route('/').post(function(req, res) {
    login();
    authorizeGuest(req.session.macAddr);
    res.redirect('https://www.google.com');
    logout();
  });
  return authoriseRouter;
};
