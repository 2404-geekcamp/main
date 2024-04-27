module.exports = class JoinController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
