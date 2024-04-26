const ChatModel = require("../models/ChatModel");

module.exports = class ChatController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * チャットを新しく作成する。
   * @return id 作成されたチャットのID
   */
  async create() {
    const model = new ChatModel(this.#db);
    return await model.create();
  }
}
