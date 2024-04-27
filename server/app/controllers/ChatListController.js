const ChatListModel = require("../models/ChatListModel");

module.exports = class ChatListController {
	#db = null;
	constructor(db) {
		this.#db = db;
	}

  /**
   * ユーザーidを受け取り、ユーザーが持つチャットのidリストを返す。
	 * @param user_id number ユーザーID
   * @return Object[] チャットルーム情報の配列
   */
  async fetch(user_id) {
    const model = new ChatListModel(this.#db);
    return await model.fetch(user_id);
  }
}
