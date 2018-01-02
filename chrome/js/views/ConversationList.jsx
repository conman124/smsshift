import React from "react";
import ConversationPreview from "views/ConversationPreview";

function ConversationList(props) {
  return (
    <ul>
      {
        props.sms.keySeq().reverse().map((sender) =>
          <ConversationPreview ...props key={sender} senderNumber={sender} />s
        )
      }
    </ul>
  )
}

export default ConversationList;
