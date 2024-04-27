const express = require('express');
const UserController = require('../../app/controllers/UserController');
const router = express.Router();
const UserSkillController = require('../../app/controllers/UserSkillController');
const ChatController = require('../../app/controllers/ChatController');
const ChatHistoryController = require('../../app/controllers/ChatHistoryController');
const InviteMessageController = require('../../app/controllers/InviteMessageController');
const JoinController = require('../../app/controllers/JoinController');
const ChatListController = require('../../app/controllers/ChatListController');
const SkillController = require('../../app/controllers/SkillController');
const ExperienceOptionController = require('../../app/controllers/ExperienceOptionController');


module.exports = function (db) {
  router.post('/search', async function (req, res, next) {
    const userController = new UserController(db);
    const users = await userController.search(req.body.skill_ids, req.body.experience_id, req.body.stance_id);
    res.json(users);
  })

  router.get('/user/:id', async function(req, res, next) {
    const userController = new UserController(db);
    const user = await userController.fetchById(req.params.id);
    res.json(user);
  })

  router.get("/user_skills/:user_id", async function (req, res, next) {
    const userSkillController = new UserSkillController(db);
    const user_id = req.params.user_id;
    const data = await userSkillController.fetch(user_id);
    res.json(data);
  });

  // chat
  router.get("/chat", async function (req, res, next) {
    const user_id = req.header('user_id');
    const chatListController = new ChatListController(db);
    const result = await chatListController.fetch(user_id);
    res.json(result);
  });

  router.post("/chat/create", async function (req, res, next) {
    const chatController = new ChatController(db);
    const result = await chatController.create();
    res.json(result);
  });

  // chat history
  router.post("/chat/:chat_id/histories/create", async function (req, res, next) {
    const chatHistoryController = new ChatHistoryController(db);
    if (!req.body.content) {
      res.status(400).json({ error: "content is required" });
      return;
    }
    const result = await chatHistoryController.insert(req.params.chat_id, req.body.sender_id, req.body.content);
    res.json(result);
  });

  router.get("/chat/:chat_id/histories", async function (req, res, next) {
    const chatHistoryController = new ChatHistoryController(db);
    const result = await chatHistoryController.fetchByChatId(req.params.chat_id);
    res.json(result);
  });

  // join
  router.post("/chat/:chat_id/user/:user_id/joins/create", async function (req, res, next) {
    const joinController = new JoinController(db);
    const result = await joinController.join(req.params.chat_id, req.params.user_id);
    res.json(result);
  });

  // invite message
  router.post("/invite_messages", async function (req, res, next) {
    const inviteMessageController = new InviteMessageController(db);
    const result = await inviteMessageController.create(req.body.receiver_id, req.body.sender_id, req.body.content);
    res.json(result);
  });

  router.get("/invite_messages/received/:user_id", async function (req, res, next) {
    const inviteMessageController = new InviteMessageController(db);
    const result = await inviteMessageController.fetchReceived(req.params.user_id);
    res.json(result);
  })

  router.get("/invite_messages/received/:user_id/unchecked", async function (req, res, next) {
    const inviteMessageController = new InviteMessageController(db);
    const result = await inviteMessageController.fetchReceived(req.params.user_id, true);
    res.json(result);
  })

  // skill
  router.get("/skills", async function (req, res, next) {
    const skillController = new SkillController(db);
    const result = await skillController.fetchAll();
    res.json(result);
  });

  // experience_option
  router.get("/experience_options", async function (req, res, next) {
    const experienceOptionController = new ExperienceOptionController(db);
    const result = await experienceOptionController.fetch();
    res.json(result);
  });

  // stance_option
  router.get("/stance_options", async function (req, res, next) {
    const stanceOptionController = new StanceOptionController(db);
    const result = await stanceOptionController.fetch();
    res.json(result);
  });

  return router;
}
