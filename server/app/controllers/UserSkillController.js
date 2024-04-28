const UserSkillModel = require('../models/UserSkillModel.js');

module.exports = class UserSkillController {
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
    const model = new UserSkillModel(this.#db);
    const skills = await model.fetch(user_id);
    return skills;
  }

  /**
   * ユーザーからの入力を受け取り、そのユーザーのスキル情報を更新する。
   * @params req HttpRequest
   * @return bool
   */
  async update(req) {
    const model = new UserSkillModel(this.#db);
    const isUpdate = await model.update(req.body.skill_ids, 1/*一旦ハードコーディングで*req.session.login_user.id*/);

    return isUpdate;
  }
}
