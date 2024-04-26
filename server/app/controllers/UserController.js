const UserModel = require("../models/UserModel");
const UserSkillController = require("./UserSkillController");
var crypto = require('crypto');

module.exports = class UserController {
  #db = null;
  constructor(db) {
    this.#db = db;
  }

  /**
   * ユーザーの検索条件を受け取り、ユーザーをスコア順に返す。
   * @param skill_ids number[] 技術を示す選択肢のIDを格納した配列
   * @param experience_id number ハッカソンへの経験を示す選択肢のID
   * @param stance_id number ハッカソンへのスタンスを示す選択肢のID
   * @return Object[] ユーザー情報の配列
   */
  async search(skill_ids, experience_id, stance_id) {
    const userSkillController = new UserSkillController(this.#db);
    const userModel = new UserModel(this.#db);
    const users = await userModel.fetchAll();
    const scoredUsers = [];
    for (const user of users) {
      user.skill_ids = await userSkillController.fetch(user.id);
      scoredUsers.push({
        ...user,
        score: this.getScore(user, skill_ids, experience_id, stance_id)
      });
    }
    scoredUsers.sort((a, b) => b.score - a.score);
    return scoredUsers;
  }

  /**
   * 対象とするユーザー、検索条件を受け取り、ユーザーのスコアを返す。
   * @param user Object ユーザー情報
   * @param skill_ids number[] 技術を示す選択肢のIDを格納した配列
   * @param experience_id number ハッカソンへの経験を示す選択肢のID
   * @param stance_id number ハッカソンへのスタンスを示す選択肢のID
   * @return number スコア。0以上100以下の小数点第一位までの少数。
   */
  getScore(user, skill_ids, experience_id, stance_id) {
    const skillWeight = 70 / skill_ids.length;
    const experienceWeight = 15;
    const stanceWeight = 15;

    let score = 0;

    for (const skillId of skill_ids) {
      if (user.skill_ids.includes(skillId)) {
        score += skillWeight;
      }
    }

    if (user.experience_option_id === experience_id) {
      score += experienceWeight;
    }
    if (user.stance_option_id === stance_id) {
      score += stanceWeight;
    }

    score = Math.round(score * 10) / 10;
    return score;
  }

  /**
  ユーザーの入力を受け取り、ログインを試行する。
  @params req HttpRequest
  @return bool ログインできたかどうか
*/
  async login(req) {
    const userModel = new UserModel(this.#db);
    const email = req.body.email;
    const password_hash = req.body.password; //ハッシュ関数を適用する
    const isUser = await userModel.isExist(email, password_hash);
    if(!isUser) return false;
    req.session.loginKey = crypto.randomBytes(32).toString('hex');
    return true;
  }

  /**
   * ユーザーの入力を受け取り、ユーザー情報を更新する
   * @params req HttpRequest
   * @return bool 更新できたかどうか
   */
  async update(req) {
    const userModel = new UserModel(this.#db);
    let updateUser = {
      'name':                 req.body.name,
      'experience_option_id': req.body.experience_option_id,
      'stance_option_id':     req.body.stance_option_id
    }
    const isUpdate = await userModel.update(updateUser, req.body.skill_ids, req.params.user_id);
    return isUpdate ? true : false;
  }
}
