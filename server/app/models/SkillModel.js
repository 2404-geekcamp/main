module.exports = class SkillModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * 技術の選択肢を取得する。
   * @return {Object[]} 技術の選択肢
   */
  async fetchAll() {
    return await this.#db.connect()
      .from('skills')
      .select();
  }
}
