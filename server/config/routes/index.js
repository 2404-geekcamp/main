var express = require('express');
var UserController = require('../../controllers/UserController');
var router = express.Router();


module.exports = function(db) {
  router.get('/', async function(req, res, next) {
    const userController = new UserController(db);
    req.body.email = "Tanaka";
    req.body.password = "Tanaka";
    await userController.login(req);
    res.json(req.session);
  });

  router.get('/feeds', function(req, res, next) {
    res.json({ message: 'Hello, world!' });
  });

  return router;
}
