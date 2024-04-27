let express = require('express');
let UserController = require('../../app/controllers/UserController');
let router = express.Router();
let UserSkillController = require('../../app/controllers/UserSkillController');
let ChatController = require('../../app/controllers/ChatController');
let chatHistoryController = require('../../app/controllers/ChatHistoryController');
const InviteMessageController = require('../../app/controllers/InviteMessageController');
const JoinController = require('../../app/controllers/JoinController');


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

  // chat
  router.post("/chat/create", async function (req, res, next) {
    const chatController = new ChatController(db);
    const result = await chatController.create();
    res.json(result);
  });

  // chat history
  router.get("/chat/:chat_id/histories", async function (req, res, next) {
    const chatGHistoryController = new chatHistoryController(db);
    const result = await chatGHistoryController.fetchByChatId(req.params.chat_id);
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

  return router;
}
