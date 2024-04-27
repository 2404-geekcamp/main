module.exports = class ChatHistoryModel {
  #db = null;
  constructor(db) {
    this.#db = db;
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
