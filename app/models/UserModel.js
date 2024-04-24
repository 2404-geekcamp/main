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
    *  @returns bool DBへの挿入が成功したか否かをbool値で返す。trueの場合は成功、falseの場合は失敗
    */
    async insert(name, email, password_hash, experience_option_id, stance_option_id) {
        const { error } = await this.#connection
            .from('users')
            .insert({
                'name':                 name,
                'email':                email,
                'password_hash':        password_hash,
                'experience_option_id': experience_option_id,
                'stance_option_id':     stance_option_id
            });
        
        return error ? false : true;
    }
}

module.exports = UserModel;