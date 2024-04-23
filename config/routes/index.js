var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/login');
});

// auth
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/register', function (req, res, next) {
  res.render('register', { title: 'Register' });
});



module.exports = router;
