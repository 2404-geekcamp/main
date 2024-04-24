const supabaseSetup = require('../../db');

class UserModel {

    #connection = null;

    constructor() {
        this.#connection = supabaseSetup();
    }
    /**
    *  ユーザーを新しく DB へと保存する。
    *  @params name string ユーザー名
    *  @params email string ユーザーが入力したメールアドレス
    *  @params password_hash string ユーザーが入力したパスワードをハッシュ化したもの
    */
    async insert(name, email, password_hash, experience_option_id, stance_option_id) {
        await this.#connection
            .from('users')
            .insert({
                'name':                 name,
                'email':                email,
                'password_hash':        password_hash,
                'experience_option_id': experience_option_id,
                'stance_option_id':     stance_option_id
            });
    }
}

module.exports = UserModel;