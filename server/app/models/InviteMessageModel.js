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

  /**
   * ユーザーidを指定して、そのユーザーが受信した招待メッセージを取得する。
   * @param user_id {number} 招待メッセージの受信先ユーザーID
   * @param limit {number} 取得する招待メッセージの最大数。デフォルトは50
   * @param includeChecked {boolean} 既読済みの招待メッセージも取得するかどうか。デフォルトはtrue
   * @return array 招待メッセージの配列。
   */
  async fetchReceivedMessages(user_id, limit = 50, includeChecked = true) {
    const { data, error } = await this.#db.connect()
      .from('invite_messages')
      .where('receiver_id', user_id)
      .limit(limit)
      .orderBy('created_at', 'desc');
    if (error) {
      console.error(error);
      return [];
    }

    return data;
  }
}
