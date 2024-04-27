import React from "react";
import ChatPreview from "./ChatsPreview";

const Chats = () => {
  return (
    <div className=" max-w-[900px] mx-auto">
      <h1 className="text-center text-3xl font-bold py-10">DM</h1>
      <div className="border-t">
        <ChatPreview />
      </div>
    </div>
  );
};

export default Chats;
