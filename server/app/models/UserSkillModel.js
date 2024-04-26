module.exports = class UserSkillModel {
  #db = null;

  constructor(db) {
    this.#db = db;
  }

  /**
   * ユーザーidを受け取り、そのユーザーのスキル情報を返す。
   * @param user_id number ユーザーID
   * @return Object[] スキル情報の配列
   */
  async fetch(user_id) {
    const { data, error } = await this.#db.connect()
      .from('user_skills')
      .select()
      .match({
        user_id: user_id
      });

    return data;
  }
}
