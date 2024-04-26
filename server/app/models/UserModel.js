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
     * ユーザー情報を更新する
     * @params Object リクエストから送られてきたユーザー情報
     * @params List リクエストから送られてきたスキル情報
     * @params 更新対象のユーザーID
     * @return bool DBへの更新が成功したか否かをbool値で返す。trueの場合は成功、falseの場合は失敗
     */
    async update(user, user_skills, id) {
        const { error } = await this.#db.connect()
            .from('users')
            .update(user)
            .eq('id', id);
        
        if(error) return false;

        const { error2 } = await this.#db.connect()
                .from('user_skills')
                .delete()
                .eq('user_id', id);
        
        if(error2) return false;

        const userHasSkills = [];
        user_skills.forEach(skill_id => {
            userHasSkills.push({
                'user_id': id,
                'skill_id': skill_id
            });
        });

        const { error3 } = await this.#db.connect()
            .from('user_skills')
            .insert(userHasSkills);
        
        return error3 ? false : true;
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
}
