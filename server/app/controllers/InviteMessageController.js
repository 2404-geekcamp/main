const InviteMessageModel = require("../models/InviteMessageModel");

module.exports = class InviteMessageController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * 招待メッセージを新しく作成する。
   * @param receiver_id {number} 招待メッセージの送信先ユーザーID
   * @param sender_id {number} 招待メッセージの送信元ユーザーID
   * @param content {string} 招待メッセージの内容
   * @return number 新しく作成された招待メッセージのID
   */
  async create(receiver_id, sender_id, content) {
    const model = new InviteMessageModel(this.#db);
    return await model.create(receiver_id, sender_id, content);
  }

  /**
   * ユーザーidを指定して、そのユーザーが受信した招待メッセージを取得する。
   * @param user_id {number} 招待メッセージの受信先ユーザーID
   * @param includeChecked {boolean} 既読のメッセージも取得するかどうか
   * @return array 招待メッセージの配列。
   */
  async fetchReceived(user_id) {
    const model = new InviteMessageModel(this.#db);
    return await model.fetchReceived(user_id);
  }
}
