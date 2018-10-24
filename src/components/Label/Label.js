import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

/* Label with required field display, htmlFor attribute and styling */
const Label = ({className, htmlFor, label, style, required}) => (
  <label
    className={className}
    htmlFor={htmlFor}
  >{label} {required && <span className={`${className}__required`}>*</span>}
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

Label.defaultProps = {}

export default Label;
