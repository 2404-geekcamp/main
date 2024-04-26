let express = require('express');
let router = express.Router();
let UserController = require('../../app/controllers/UserController');
let UserSkillController = require('../../app/controllers/UserSkillController');


module.exports = function (db) {
  router.post('/search', async function (req, res, next) {
    const userController = new UserController(db);
    const users = await userController.search(req.body.skill_ids, req.body.experience_id, req.body.stance_id);
    res.json(users);
  });

  router.patch('/user_update', async function(req, res, next) {
    const userController = new UserController(db);
    const isUpdate = await userController.update(req);
    res.json(isUpdate);
  });

  router.get("/user_skills/:user_id", async function (req, res, next) {
    const userSkillController = new UserSkillController(db);
    const user_id = req.params.user_id;
    const data = await userSkillController.fetch(user_id);
    res.json(data);
  });

  return router;
}
