import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import icon from "../samples/icon.png";
import Modal from "react-modal";

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const userId = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`${apiUrl}/user/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(user)

  const [currentUser, setCurrentUser] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="mx-auto max-w-[900px] p-8 bg-slate-300 my-8 rounded-md">
      {/* <h1>{ id }</h1> */}
      <div className="flex justify-between">
        <div className="flex">
          <img src={icon} alt="icon sample" style={{ width: "80px" }} />
          <h2 className="text-2xl font-bold ml-4">{user.name}</h2>
        </div>
        {currentUser ? (
          <Link to={"edit"} className="px-4 py-2 h-fit rounded-md bg-gray-50">
            編集
          </Link>
        ) : (
          <button
            onClick={openModal}
            className="px-4 py-2 h-fit rounded-md bg-gray-50"
          >
            招待メッセージ送る
          </button>
        )}
      </div>
      <div>
        <p className="text-xl font-bold mt-10">技術</p>
        <div className="flex max-w-full flex-wrap w-4/5	">
          <p className="mx-2 my-2 bg-white p-1 rounded-lg">Sample</p>
          <p className="mx-2 my-2 bg-white p-1 rounded-lg">Sample</p>
          <p className="mx-2 my-2 bg-white p-1 rounded-lg">Sample</p>
          <p className="mx-2 my-2 bg-white p-1 rounded-lg">Sample</p>
          <p className="mx-2 my-2 bg-white p-1 rounded-lg">Sample</p>
          <p className="mx-2 my-2 bg-white p-1 rounded-lg">Sample</p>
          <p className="mx-2 my-2 bg-white p-1 rounded-lg">Sample</p>
        </div>
        <div className="">
          <p className="text-xl font-bold mt-10">自己紹介</p>
          <p className="mx-2 my-2 bg-white p-1 rounded-lg">
            ここに自己紹介テキストが来ます
            サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
          </p>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="relative p-4">
          <button onClick={closeModal} className="absolute right-0 top-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15"
                stroke="#374151"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 5L15 15"
                stroke="#374151"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <form action="" className="flex flex-col gap-6 items-center">
            <label htmlFor="message" className="text-lg">
              {/* 招待を送る相手 */}
              ユーザー名
            </label>
            <textarea
              name="message"
              id=""
              cols="40"
              rows="6"
              placeholder="メッセージを入力…"
              className="resize-none border p-2"
            ></textarea>
            <button
              type="submit"
              className="py-2 px-6 border border-gray-600 rounded-full w-fit"
            >
              招待を送る
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default userId;
