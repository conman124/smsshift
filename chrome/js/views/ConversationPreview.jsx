import React from "react";

function ConversationPreview(props) {
  let child = props.senderNumber;

  if(props.currentConversation === props.senderNumber) {
    child = <strong>{child}</strong>;
  }

  return (
    <li>{child}</li>
  )
}

export default ConversationPreview;
