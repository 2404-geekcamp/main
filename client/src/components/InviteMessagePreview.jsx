import React from "react";
import Modal from "react-modal";
import icon from "../samples/icon.png";
import axios from "axios";

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

const InviteMessagePreview = ({inviteMessage}) => {
  const { sender_id, content } = inviteMessage;
  const [sender, setSender] = React.useState({});
  React.useEffect(() => {
    axios.get(`${apiUrl}/user/${sender_id}`).then((res) => {
      setSender(res.data);
    });
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center gap-6 py-6 px-6 border-b w-full hover:bg-gray-50"
      >
        {/* アイコン */}
        <div className="w-14 h-14 rounded-full">
          <img src={icon} alt="" />
        </div>
        <div className="text-start">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">{sender.name}</span>
            <span className="text-gray-500">4月21日</span>
          </div>
          <span>招待メッセージ</span>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex flex-col gap-8 w-[600px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">ユーザー名</h2>
            <p>招待メッセージ</p>
          </div>
          <div className="flex justify-around">
            <button className="py-2 w-36 border border-gray-900">
              ことわる
            </button>
            <button className="py-2 w-36 bg-gray-700 text-white">
              話してみる
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default InviteMessagePreview;
