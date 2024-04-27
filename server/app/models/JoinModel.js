module.exports = class JoinModel {
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
  async insert(chat_id, user_id) {
    const { data, error } = await this.#db.connect()
      .from('joins')
      .insert({ chat_id, user_id })
      .select('id')
      .single();
    if (error) {
      console.error(error);
      return null;
    }

    return data?.id;
  }
}
