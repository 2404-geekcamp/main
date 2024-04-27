import React from "react";

//DM一覧のパーツ
const ChatPreview = () => {
  return (
    <div className="flex items-center gap-6 py-6 px-6 border-b">
      {/* アイコン */}
      <div className="w-14 h-14 rounded-full bg-gray-200">
        <img src="" alt="" />
      </div>
      <div>
        <div className="flex items-center gap-6">
          <span className="font-bold text-lg">ユーザー名</span>
          <span className="text-gray-500">4月21日</span>
        </div>
        <span>message content</span>
      </div>
    </div>
  );
};

export default ChatPreview;
