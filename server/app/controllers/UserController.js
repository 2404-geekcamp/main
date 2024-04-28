const UserModel = require("../models/UserModel");
const UserSkillController = require("./UserSkillController");
var crypto = require('crypto');
var bcrypt = require('bcrypt');

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
      user.score = this.getScore(user, skill_ids, experience_id, stance_id);
      scoredUsers.push({...user});
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
    const password = req.body.password;
    const isUser = await userModel.isExist(email, password);
    if(!isUser) return false;
    const loginUser = await userModel.fetchOfLoginUser(email, password);
    req.session.login_key = crypto.randomBytes(32).toString('hex');
    req.session.login_user = loginUser;
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
    const isUpdate = await userModel.update(updateUser, req.params.user_id);
    return isUpdate;
  }

  /**
   * ユーザーの入力を受け取り、初期プロフィール情報を登録する
   * @params req HttpRequest
   * @return bool 作成できたかどうか
   */
  async createProfile(req) {
    const userModel = new UserModel(this.#db);
    let createProfileUser = {
      'experience_option_id': req.body.experience_option_id,
      'stance_option_id':     req.body.stance_option_id
    }
    const isCreate = await userModel.update(createProfileUser, req.session.login_user.id);
    return isCreate;
  }

   /** 対象とするユーザーの情報を返す
   * @params id
   * @return Object
   */
  async fetchById(id) {
    const userModel = new UserModel(this.#db);
    const user = await userModel.fetchOfId(id);
    return user;
  }

  /**
   * ユーザーからの入力に基づき新規登録する。
   * @params req HttpRequest
   * @return bool
   */
  async signup(req) {
    const userModel = new UserModel(this.#db);
    const newUser = {
      'name':          req.body.username,
      'email':         req.body.email,
      'password_hash': bcrypt.hashSync(req.body.password, 10)
    }
    const isCreate = await userModel.insert(newUser);
    return isCreate;
  }
}
