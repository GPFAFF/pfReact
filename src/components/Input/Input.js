import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss'

const Input = ({type, name, id, defaultValue}) => {

  return (
    <input
      type={type}
      name={name}
      id={id}
      defaultValue={defaultValue}
      aria-required='true'
      required
    />
  )
}

Input.propTypes = {
  /* Specific type of input, i.e. (text, number, date, etc. ) */
  type: PropTypes.string.isRequired,
  /* Name attribute */
  name: PropTypes.string,
  /* HTML ID for associdated label */
  id: PropTypes.string.isRequired,
  /* Default Value */
  defaultValue: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  defaultValue: ''
};

export default Input;
