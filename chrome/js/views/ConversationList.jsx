import React from "react";
import ConversationPreview from "views/ConversationPreview";
import List from "material-ui/List"

function ConversationList(props) {
  return (
    <List>
      {
        props.sms.keySeq().reverse().map((sender) =>
          <ConversationPreview {...props} key={sender} senderNumber={sender} />
        )
      }
    </List>
  )
}

export default ConversationList;
