module.exports = class InviteMessageModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
