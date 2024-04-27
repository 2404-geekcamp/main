const ExperienceOptionModel = require('../models/ExperienceOptionModel');

module.exports = class ExperienceOptionController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * ハッカソンの経験一覧の選択肢を取得する。
   * @return {Object[]} ハッカソンの経験一覧の選択肢
   */
  async fetch() {
    const model = new ExperienceOptionModel(this.#db);
    return await model.fetch();
  }
}
