import React from 'react';
import proptypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  container: {
    display: "flex",
    height: "100%"
  },
  left: {
    flex: "0 0 240px"
  },
  right: {
    flex: "1"
  }
};

class DualPane extends React.Component {
  constructor(props) {
    super(props);

    if(!this.props.left || !React.isValidElement(this.props.left) || !this.props.right || !React.isValidElement(this.props.right)) {
      throw new Error("DualPane needs a left and a right child!");
    }
  }

  render() {
    return (
      <div className={this.props.classes.container}>
        <div className={this.props.classes.left}>{this.props.left}</div>
        <div className={this.props.classes.right}>{this.props.right}</div>
      </div>
    )
  }
}

DualPane.propTypes = {
  classes: proptypes.object.isRequired
}

export default injectSheet(styles)(DualPane);
