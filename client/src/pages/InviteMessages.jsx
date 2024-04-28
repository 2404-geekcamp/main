import React, { useEffect } from "react";
import InviteMessagePreview from "../components/InviteMessagePreview";
import axios from "axios";
import { Header } from "../components/Header";

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
    <>
    <Header backPath={"/home"} back={"<"} title={"招待メッセージ一覧"} />
    <div className="max-w-[900px] mx-auto">
      <div className="border-t">
        {inviteMessages.map((inviteMessage) => (
          <InviteMessagePreview
            key={inviteMessage.id}
            inviteMessage={inviteMessage}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default InviteMessages;
