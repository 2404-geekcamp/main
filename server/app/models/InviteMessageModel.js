module.exports = class InviteMessageModel {
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
    const { data, error } = await this.#db.connect()
      .from('invite_messages')
      .insert({
        'to_user_id': to_user_id,
        'from_user_id': from_user_id,
        'content': content
      })
      .select("id");
    if (error) {
      console.error(error);
      return null;
    }

    return data?.id;
  }
}
