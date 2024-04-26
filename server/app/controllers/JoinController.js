const JoinModel = require("../models/JoinModel");

module.exports = class JoinController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * ユーザーidを受け取り、そのユーザーが参加しているチャットの一覧を返す。
   * @param user_id number ユーザーID
   * @return Object[] チャット情報の配列
   */
  async fetch(user_id) {
    const model = new JoinModel(this.#db);
    const data = await model.fetch(user_id);
    return data;
  }
}
