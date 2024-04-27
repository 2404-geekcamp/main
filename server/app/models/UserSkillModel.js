module.exports = class UserSkillModel {
  #db = null;

  constructor(db) {
    this.#db = db;
  }

  /**
   * ユーザーidを受け取り、そのユーザーのスキル情報を返す。
   * @param user_id number ユーザーID
   * @return Object[] スキル情報の配列
   */
  async fetch(user_id) {
    const { data, error } = await this.#db.connect()
      .from('user_skills')
      .select()
      .match({
        user_id: user_id
      });

    return data;
  }

  /**
   * ユーザーidを受け取り、そのユーザーのスキル情報を更新する。
   * @params skills[] ユーザーのskill_idを配列
   * @return bool
   */
  async update(user_skills, id) {
    const { error } = await this.#db.connect()
                .from('user_skills')
                .delete()
                .eq('user_id', id);
        
        if(error) return false;

        const userHasSkills = [];
        user_skills.forEach(skill_id => {
            userHasSkills.push({
                'user_id': id,
                'skill_id': skill_id
            });
        });

        const { error2 } = await this.#db.connect()
            .from('user_skills')
            .insert(userHasSkills);
        
        return error2 ? false : true;
  }
}
