import React from "react";
import ListItem from "material-ui/List/ListItem";
import ThreeLineListItemText from "views/ThreeLineListItemText";
import withStyles from 'material-ui/styles/withStyles';

const SmallerThreeLineListItemText = withStyles({
  primary: {lineHeight: "1.25em"}
})(ThreeLineListItemText);


function ConversationPreview(props) {
  return (
    <ListItem>
      <SmallerThreeLineListItemText
        primary={props.senderNumber}
        secondary={props.sms.get(props.senderNumber).last().message}
        tertiary={props.sms.get(props.senderNumber).last().timestamp}
      />
    </ListItem>
  )
}

export default ConversationPreview;
