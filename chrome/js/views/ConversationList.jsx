import React from "react";
import ConversationPreview from "views/ConversationPreview";

function ConversationList(props) {
  return (
    <ul>
      {
        props.sms.keySeq().reverse().map((sender) =>
          <ConversationPreview key={sender} senderNumber={sender} currentConversation={props.currentConversation} />
        )
      }
    </ul>
  )
}

export default ConversationList;
