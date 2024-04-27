const ChatHistoryModel = require("../models/ChatHistoryModel");

module.exports = class ChatHistoryController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * チャット履歴を作成する
   * @param {number} chatId
   * @param {number} senderId
   * @param {string} content
   * @return {number} 作成したチャット履歴のid
   */
  async insert(chatId, senderId, content) {
    const model = new ChatHistoryModel(this.#db);
    return await model.insert(chatId, senderId, content);
  }

  /**
   * チャットidを受け取り、そのチャットの履歴を返す
   * @param {number} chatId
   * @return Object[] チャット履歴
   */
  async fetchByChatId(chatId) {
    const { data, error } = await this.#db.connect()
      .from('chat_histories')
      .select()
      .eq('chat_id', chatId);
    if (error) {
      console.error(error);
      return null;
    }

    return data;
  }
}
