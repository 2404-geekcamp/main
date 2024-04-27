var bcrypt = require('bcrypt');

module.exports = class UserModel {
    #db = null;

    constructor(db) {
        this.#db = db;
    }

    /**
    *  ユーザーを新しく DB へと保存する。
    *  @params Object
    *  @returns bool DBへの挿入が成功したか否かをbool値で返す。trueの場合は成功、falseの場合は失敗
    */
    async insert(user) {
        const { error } = await this.#db.connect()
            .from('users')
            .insert(user);

        return error ? false : true;
    }

    /**
     * ユーザー情報を更新する
     * @params Object リクエストから送られてきたユーザー情報
     * @params 更新対象のユーザーID
     * @return bool DBへの更新が成功したか否かをbool値で返す。trueの場合は成功、falseの場合は失敗
     */
    async update(user, id) {
        const { error } = await this.#db.connect()
            .from('users')
            .update(user)
            .eq('id', id);
        
        return error ? false : true;
    }

    /**
     * ユーザー一覧を取得する。
     * @params number max 最大取得数（省略可）
     * @returns Object[] ユーザー情報の配列
     */
    async fetchAll(max=100) {
        const { data, error } = await this.#db.connect()
            .from('users')
            .select()
            .limit(max);

        return data;
    }

    /**
     ユーザーデータが存在するか検索する。
    @params email string
    @params password string
    @return boolean 存在するか
    */
    async isExist(email, password) {
        const { data, error } = await this.#db.connect()
            .from('users')
            .select()
            .eq('email', email);
        
        if(data.length === 0) return false;

        if(!bcrypt.compareSync(password, data[0].password_hash)) return false;

        return true
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
