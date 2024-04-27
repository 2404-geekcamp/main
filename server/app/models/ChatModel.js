module.exports = class ChatModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * チャットを新しく作成する。
   * @return number 作成されたチャットのID
   */
  async create() {
    const { data, error } = await this.#db.connect()
      .from('chats')
      .insert({})
      .select('id');
    if (error) {
      console.error(error);
      return null;
    }
    
    return data?.id;
  }
}
