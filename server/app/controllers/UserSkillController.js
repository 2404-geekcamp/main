const UserSkillModel = require('../models/UserSkillModel.js');

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
    const model = new UserSkillModel(this.#db);
    const skills = await model.fetch(user_id);
    return skills.map(skill => skill.skill_id);
  }
}
