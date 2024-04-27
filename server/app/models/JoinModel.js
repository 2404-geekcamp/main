module.exports = class JoinModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
