const SkillModel = require("../models/SkillModel");

module.exports = class SkillController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * idをもとに技術を取得する。
   * @param {number} id 技術ID
   * @return {Object} 技術
   */
  async fetchById(id) {
    const model = new SkillModel(this.#db);
    return await model.fetchById(id);
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
