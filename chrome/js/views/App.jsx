import React from 'react';

function Person(props) {
  return (
    <li>
      <em>{props.senderNumber}</em>
      <ul>
        {
          props.messages.map((msg) =>
            <li key={msg.senderNumber+"_"+msg.timestamp}>{msg.message}</li>
          )
        }
      </ul>
    </li>
  )
}

export default function App(props) {
  return (
    <ul>
      {
        props.sms.keySeq().reverse().map((sender) =>
          <Person key={sender} senderNumber={sender} messages={props.sms.get(sender)} />
        )
      }
    </ul>
  )
}
