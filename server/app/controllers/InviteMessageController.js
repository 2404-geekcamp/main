module.exports = class InviteMessageController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
