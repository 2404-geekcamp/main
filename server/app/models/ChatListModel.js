module.exports = class ChatListModel {
	#db = null;
	constructor(db) {
		this.#db = db;
	}
	/**
	 * ユーザーidを受け取り、そのユーザーのチャット情報を返す。
	 * @param user_id number ユーザーID
	 * @return Object[] チャット情報の配列
	 */
	async fetch(user_id) {
		const { data, error } = await this.#db.connect()
			.from('joins')
			.select()
			.match({
				user_id: user_id
			});
		if (error) {
			console.error(error);
			return null;
		}
		return data
	}
}
