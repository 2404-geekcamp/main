import React from "react";
import InviteMessagePreview from "../components/InviteMessagePreview";
import { Header } from "../components/Header";

const InviteMessages = () => {
  return (
    <>
    <Header backPath={"/home"} back={"<"} title={"招待メッセージ一覧"} />
    <div className="max-w-[900px] mx-auto">
      <div className="border-t">
        <InviteMessagePreview />
      </div>
    </div>
    </>
  );
};

export default InviteMessages;
