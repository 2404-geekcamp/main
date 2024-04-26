const ChatModel = require("../models/ChatModel");

module.exports = class ChatController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * チャットを新しく作成する。
   * @return boolean 成功したか
   */
  async create() {
    const model = new ChatModel(this.#db);
    return await model.create();
  }
}
