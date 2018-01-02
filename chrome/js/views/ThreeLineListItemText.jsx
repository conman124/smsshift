import React from 'react';
import Typography from 'material-ui/Typography';
import classnames from "classname";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    // grow/shrink as necessary to allow other list item elements to fit
    flex: "1 1 auto",
    minWidth: 0,
    padding: '0 16px',
    '&:first-child': {
      paddingLeft: 0
    }
  },
  inset: {
    '&:first-child': {
      paddingLeft: theme.spacing.unit * 7
    }
  },
  dense: {
    fontSize: theme.typography.pxToRem(13)
  },
  text: {}, // Allow external customization
  textDense: {
    fontSize: 'inherit'
  },
  primary: {
    // external customization
  },
  secondary: {
    // external customization
  },
  tertiary: {
    // external customization
  }
});

function ThreeLineListItemText(props, context) {
  const {
    classes,
    className: classNameProp,
    disableTypography,
    inset,
    primary,
    secondary,
    tertiary,
    ...other
  }  = props;

  const { dense } = context;
  const rootClassName = classnames(
    classes.root,
    {
      [classes.dense]: dense,
      [classes.inset]: inset
    },
    classNameProp
  );

  return (
    <div className={rootClassName} {...other}>
      {primary &&
        (disableTypography ? (
          primary
        ) : (
          <Typography
            type="subheading"
            className={classnames(classes.text, classes.primary, {[classes.textDense]: dense})}
          >
            {primary}
          </Typography>
        ))}
      {secondary &&
        (disableTypography ? (
          secondary
        ) : (
          <Typography
            type="body1"
            className={classnames(classes.text, classes.secondary, {[classes.textDense]: dense})}
          >
            {secondary}
          </Typography>
        ))}
      {tertiary &&
        (disableTypography ? (
          tertiary
        ) : (
          <Typography
            type="body1"
            color="secondary"
            className={classnames(classes.text, classes.tertiary, {[classes.textDense]: dense})}
          >
            {tertiary}
          </Typography>
        ))}
    </div>
  )
}

ThreeLineListItemText.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disableTypography: PropTypes.bool,
  inset: PropTypes.bool,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  tertiary: PropTypes.node
}

export default withStyles(styles)(ThreeLineListItemText);
