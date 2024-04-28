import React, { useEffect } from "react";
import InviteMessagePreview from "../components/InviteMessagePreview";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const InviteMessages = () => {
  const userId = 1;   // TODO: セッションに置きかえ
  const [inviteMessages, setInviteMessages] = React.useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/invite_messages/received/" + userId).then((res) => {
      setInviteMessages(res.data);
    });
  }, []);

  return (
    <div className="max-w-[900px] mx-auto">
      <h1 className="text-center text-3xl font-bold py-10">招待メッセージ</h1>
      <div className="border-t">
        {inviteMessages.map((inviteMessage) => (
          <InviteMessagePreview
            key={inviteMessage.id}
            inviteMessage={inviteMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default InviteMessages;
