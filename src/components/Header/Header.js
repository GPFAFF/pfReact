import React from 'react';
import PropTypes from 'prop-types';

/** A H1 component to pass in on every page */
function Header({header}) {
  return (
    <h1>Here is your {header}</h1>
  )
}

Header.propTypes = {
  /** Message to display */
  header: PropTypes.string.isRequired
}

Header.defaultProps = {
  header: 'pfReact Components'
}

export default Header;
