let express = require('express');
let UserController = require('../../app/controllers/UserController');
let router = express.Router();

module.exports = function (db) {
  router.post('/search', async function (req, res, next) {
    const userController = new UserController(db);
    const users = await userController.search(req.body.skill_ids, req.body.experience_id, req.body.stance_id);
    res.json(users);
  })

  return router;
}
