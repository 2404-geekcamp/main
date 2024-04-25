module.exports = class UserModel {
    #db = null;

    constructor(db) {
        this.#db = db;
    }

    /**
    *  ユーザーを新しく DB へと保存する。
    *  @params name string ユーザー名
    *  @params email string ユーザーが入力したメールアドレス
    *  @params password_hash string ユーザーが入力したパスワードをハッシュ化したもの
    *  @returns bool DBへの挿入が成功したか否かをbool値で返す。trueの場合は成功、falseの場合は失敗
    */
    async insert(name, email, password_hash, experience_option_id, stance_option_id) {
        const { error } = await this.#db.connect()
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

    /**
     ユーザーデータが存在するか検索する。
    @params email string
    @params password_hash string
    @return boolean 存在するか
    */
    async isExist(email, password_hash) {
        const { data, error } = await this.#db.connect()
            .from('users')
            .select()
            .match({
                email:         email,
                password_hash: password_hash
            });
        
        return data.length ? true : false
    }

    /**
     * ユーザー情報を取得する
     * @params id
     * @return user
     */
    async fetchOfId(id) {
        const { data, error } = await this.#db.connect()
            .from('users')
            .select()
            .eq('id', id);
        
        return data;
    }
}
