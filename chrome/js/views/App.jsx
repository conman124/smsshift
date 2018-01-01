import React from "react";
import ConversationList from "views/ConversationList";
import Conversation from "views/Conversation";

export default function App(props) {
  return (
    <div>
      <ConversationList {...props} />
      <Conversation {...props} />
    </div>
  );
}
