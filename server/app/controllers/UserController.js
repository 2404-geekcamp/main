const UserModel = require("../models/UserModel");
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
    const userModel = new UserModel(this.#db);
    const users = await userModel.fetchAll();
    const scoredUsers = users.map(user => {
      return {
        ...user,
        score: this.#getScore(user, skill_ids, experience_id, stance_id)
      };
    });
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
  #getScore(user, skill_ids, experience_id, stance_id) {
    const skillWeight = 40 / skill_ids.length;
    const experienceWeight = 30;
    const stanceWeight = 30;

    let score = 100;

    if (user.skill_ids && user.skill_ids.length > 0) {
      for (const skillId of user.skill_ids) {
        if (!skill_ids.includes(skillId)) {
          score -= skillWeight;
        }
      }
    }
    if (user.experience_id && user.experience_id !== experience_id) {
      score -= experienceWeight;
    }
    if (user.stance_id && user.stance_id !== stance_id) {
      score -= stanceWeight;
    }

    score = Math.round(score * 10) / 10;
    return score;
  }

  /**
  ユーザーの入力を受け取り、ログインを試行する。
  @params req HttpRequest
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
}
