const InviteMessageModel = require("../models/InviteMessageModel");

module.exports = class InviteMessageController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * 招待メッセージを新しく作成する。
   * @param to_user_id {number} 招待メッセージの送信先ユーザーID
   * @param from_user_id {number} 招待メッセージの送信元ユーザーID
   * @param content {string} 招待メッセージの内容
   * @return number 新しく作成された招待メッセージのID
   */
  async create(to_user_id, from_user_id, content) {
    const model = new InviteMessageModel(this.#db);
    return await model.create(to_user_id, from_user_id, content);
  }
}
