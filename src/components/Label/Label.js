import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

/* Label with required field display, htmlFor attribute and styling */
const Label = ({className, htmlFor, label, required }) => (
  <label
    className={className}
    htmlFor={htmlFor}
  >
    <span className={`${className}__text`}>{label}</span>
    {required && <span className={`${className}__required`}>*</span>}
  </label>
)

Label.propTypes = {
  /* HTML ID for associdated input */
  htmlFor: PropTypes.string.isRequired,
  /* Classname */
  className: PropTypes.string,
  /* Label text */
  label: PropTypes.string.isRequired,
  /* Display asterisk after label if true */
  required: PropTypes.bool,
  /* Default Styling */
  style: PropTypes.string
}

Label.defaultProps = {
  required: false
}

export default Label;
