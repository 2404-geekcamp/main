var express = require('express');
var router = express.Router();

router.get('/feeds', function(req, res, next) {
  res.json({ message: 'Hello, world!' });
});

module.exports = router;
