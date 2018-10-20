import React from 'react';
import PropTypes from 'prop-types';

/* Label with required field display, htmlFor attribute and styling */
const Label = ({htmlFor, label, style, required}) => (
  <label
    style={{display: style}}
    htmlFor={htmlFor}
  >{label} {required && <span style={{color: 'red'}}>*</span>}
  </label>
)

Label.propTypes = {
  /* HTML ID for associdated input */
  htmlFor: PropTypes.string.isRequired,
  /* Label text */
  label: PropTypes.string.isRequired,
  /* Display asterisk after label if true */
  required: PropTypes.bool,
  /* Default Styling */
  style: PropTypes.string
}

Label.defaultProps = {
  style: 'block'
}

export default Label;
