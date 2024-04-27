module.exports = class ChatHistoryController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
