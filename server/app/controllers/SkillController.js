module.exports = class SkillController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
