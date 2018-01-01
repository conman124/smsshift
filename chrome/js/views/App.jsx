import React from 'react';

function Person(props) {
  let child = props.senderNumber;

  if(props.currentConversation === props.senderNumber) {
    child = <em>{child}</em>;
  }

  return (
    <li>{child}</li>
  )
}

function ConversationList(props) {
  return (
    <ul>
      {
        props.sms.keySeq().reverse().map((sender) =>
          <Person key={sender} senderNumber={sender} currentConversation={props.currentConversation} />
        )
      }
    </ul>
  )
}

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

export default function App(props) {
  return (
    <div>
      <ConversationList {...props} />
      <Conversation {...props} />
    </div>
  );
}
