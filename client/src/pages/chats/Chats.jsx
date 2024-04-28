import React from "react";
import ChatPreview from "../../components/ChatsPreview";
import { Header } from "../../components/Header";

const Chats = () => {
  return (
    <>
    <Header backPath={"/home"} back={"<"} title={"DM"}/>
    <div className="max-w-[900px] mx-auto">
      
      
      <div className="border-t">
        <ChatPreview />
      </div>
    </div>
    </>
  );
};

export default Chats;
