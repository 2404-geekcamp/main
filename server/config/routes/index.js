let express = require('express');
let UserController = require('../../app/controllers/UserController');
let router = express.Router();
let UserSkillController = require('../../app/controllers/UserSkillController');
let ChatController = require('../../app/controllers/ChatController');
let ChatListController = require('../../app/controllers/ChatListController');


module.exports = function (db) {
  router.post('/search', async function (req, res, next) {
    const userController = new UserController(db);
    const users = await userController.search(req.body.skill_ids, req.body.experience_id, req.body.stance_id);
    res.json(users);
  })

  router.get("/user_skills/:user_id", async function (req, res, next) {
    const userSkillController = new UserSkillController(db);
    const user_id = req.params.user_id;
    const data = await userSkillController.fetch(user_id);
    res.json(data);
  });

  router.post("/chat/create", async function (req, res, next) {
    const chatController = new ChatController(db);
    const result = await chatController.create();
    res.json(result);
  });

  router.get("/chat", async function (req, res, next) {
    const user_id = req.header('user_id');
    const chatListController = new ChatListController(db);
    const result = await chatListController.fetch(user_id);
    res.json(result);
  });

  return router;
}
