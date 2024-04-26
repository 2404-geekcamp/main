module.exports = class ChatController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
