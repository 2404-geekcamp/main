const SkillModel = require("../models/SkillModel");

module.exports = class SkillController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * 技術の選択肢を取得する。
   * @return {Object[]} 技術の選択肢
   */
  async fetchAll() {
    const model = new SkillModel(this.#db);
    return await model.fetchAll();
  }
}
