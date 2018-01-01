import React from "react";

function Conversation(props) {
  if(!props.currentConversation) {
    return null;
  }

  return (
    <ul>
      {
        props.sms.get(props.currentConversation).map((message) =>
          <li key={message.timestamp}>{message.message}</li>
        )
      }
    </ul>
  )
}

export default Conversation;
