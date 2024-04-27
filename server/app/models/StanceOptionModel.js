module.exports = class StanceOptionModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * 選択肢一覧を取得する。
   * @return {Object[]} 選択肢一覧
   */
  async fetch() {
    const { data, error } = await this.#db.connect()
      .from('stance_options')
      .select();
    if (error) {
      console.error(error);
      return null;
    }

    return data;
  }
}
