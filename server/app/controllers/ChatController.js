module.exports = class UserController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
