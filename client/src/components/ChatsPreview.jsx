import React from "react";
import icon from "../samples/icon.png";
import { Link } from "react-router-dom";

//DM一覧のパーツ
const ChatPreview = () => {
  return (
    <Link
      to={"1"} //idを入れる
      className="flex items-center gap-6 py-6 px-6 border-b hover:bg-gray-50"
    >
      {/* アイコン */}
      <div className="w-14 h-14 rounded-full">
        <img src={icon} alt="" />
      </div>
      <div>
        <div className="flex items-center gap-6">
          <span className="font-bold text-lg">ユーザー名</span>
          <span className="text-gray-500">4月21日</span>
        </div>
        <span>message content</span>
      </div>
    </Link>
  );
};

export default ChatPreview;