import React from "react";
import { Link, useParams } from "react-router-dom";
import icon from "../../samples/icon.png";
import { Header } from "../../components/Header";

const ChatsId = () => {
  let { id } = useParams();
  return (
    <div className="max-w-[900px] mx-auto">
      <div className="fixed top-0 w-full">
        <div className="max-w-[900px] py-10 border-b">
          {/* DMの相手のユーザー名を表示 */}
          <h1 className="text-center text-3xl font-bold">ユーザー{id}</h1>
          <Link
            to={"/chats"}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 ml-6"
          >
            &lt; DM一覧
          </Link>
        </div>
      </div>

      <div className="max-w-[768px] mx-auto">
        <div className="overflow-auto h-full my-36 px-6 md:px-0">
          {/* 相手からのメッセージ */}
          <div className="flex gap-4 mt-10">
            <div className="w-8 h-8 rounded-full">
              <img src={icon} alt="" />
            </div>
            <div className="flex items-end gap-2">
              <div className="max-w-96 py-2 px-4 rounded-r-xl rounded-bl-xl border border-gray-800">
                <p>メッセージ</p>
              </div>
              <span className="text-gray-500">17:10</span>
            </div>
          </div>
          {/* 自分からのメッセージ */}
          <div className="flex flex-row-reverse items-end gap-2 mt-6">
            <div className="max-w-96 py-2 px-4 rounded-l-xl rounded-br-xl bg-gray-200">
              <p>メッセージ</p>
            </div>
            <span className="text-gray-500">17:10</span>
          </div>
        </div>
        {/* メッセージ入力欄 */}
        <div className="fixed bottom-0 w-full bg-white">
          <div className="max-w-[768px] flex gap-4 pb-20 px-6 md:px-0">
            <textarea
              type="text"
              rows={1}
              className="py-2 px-4 border w-full rounded-xl border-gray-800 resize-none"
            />
            {/* 送信ボタン */}
            <button className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsId;
