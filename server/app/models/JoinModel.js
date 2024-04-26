module.exports = class JoinModel {
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
    const { data, error } = await this.#db.connect()
      .from('joins')
      .select()
      .eq('user_id', user_id);
    if (error) {
      console.error(error);
      return null;
    }

    return data;
  }
}
