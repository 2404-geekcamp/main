module.exports = class ExperienceOptionModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * ハッカソンの経験一覧の選択肢を取得する。
   * @return {Object[]} ハッカソンの経験一覧の選択肢
   */
  async fetch() {
    const { data, error } = await this.#db.connect()
      .from('experience_options')
      .select();
    if (error) {
      console.error(error);
      return null;
    }

    return data;
  }
}
