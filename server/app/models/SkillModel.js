module.exports = class SkillModel {
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
    const { data, error } = await this.#db.connect()
      .from('skills')
      .select()
      .eq('id', id)
      .single();

    if (error) {
      console.error(error);
      return null;
    }

    return data;
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
