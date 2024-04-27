module.exports = class ChatHistoryModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
