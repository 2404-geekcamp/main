import React from "react";
import InviteMessagePreview from "../components/InviteMessagePreview";

const InviteMessages = () => {
  return (
    <div className="max-w-[900px] mx-auto">
      <h1 className="text-center text-3xl font-bold py-10">招待メッセージ</h1>
      <div className="border-t">
        <InviteMessagePreview />
      </div>
    </div>
  );
};

export default InviteMessages;
