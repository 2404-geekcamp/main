module.exports = class ChatModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * チャットを新しく作成する。
   * @return boolean 成功したか
   */
  async create() {
    const { error } = await this.#db.connect()
      .from('chats')
      .insert({});
  }
}
