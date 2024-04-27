const StanceOptionModel = require("../models/StanceOptionModel");

module.exports = class StanceOptionController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * スタンス一覧を取得する。
   * @return {Object[]} スタンス一覧
   */
  async fetch() {
    const model = new StanceOptionModel(this.#db);
    return await model.fetch();
  }
}
