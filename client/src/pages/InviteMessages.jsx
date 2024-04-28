import React from "react";
import InviteMessagePreview from "../components/InviteMessagePreview";
import { Header } from "../components/Header";

const InviteMessages = () => {
  return (
    <>
    <Header backPath={"/home"} back={"<"} />
    <div className="max-w-[900px] mx-auto">
      <h1 className="text-center text-3xl font-bold py-10">招待メッセージ</h1>
      <div className="border-t">
        <InviteMessagePreview />
      </div>
    </div>
    </>
  );
};

export default InviteMessages;
