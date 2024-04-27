module.exports = class ChatListController {
	#db = null;
	constructor(db) {
		this.#db = db;
	}
}
