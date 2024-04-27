module.exports = class SkillModel {
  #db = null;
  constructor(db) {
    this.#db = db;
  }
}
