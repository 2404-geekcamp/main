module.exports = class InviteMessageModel {
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
    const { data, error } = await this.#db.connect()
      .from('invite_messages')
      .insert({
        'receiver_id': receiver_id,
        'sender_id': sender_id,
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
