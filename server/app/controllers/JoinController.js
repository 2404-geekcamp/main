const JoinModel = require("../models/JoinModel");

module.exports = class JoinController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * チャットに新しくユーザーを追加する
   * @param {string} chat_id チャットID
   * @param {string} user_id ユーザーID
   * @return number 追加した行のid
   */
  async join(chat_id, user_id) {
    const model = new JoinModel(this.#db);
    return await model.insert(chat_id, user_id);
  }
}
