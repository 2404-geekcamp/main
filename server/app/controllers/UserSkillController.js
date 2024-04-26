module.exports = class UserSkillController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * ユーザーidを受け取り、そのユーザーのスキル情報を返す。
   * @param user_id number ユーザーID
   * @return int[] スキルidの配列
   */
  async fetch(user_id) {
    const { data, error } = await this.#db.connect()
      .from('user_skills')
      .select("skill_id")
      .match({
        user_id: user_id
      });

    return data.map(obj => obj.skill_id);
  }
}
