import React from 'react';
import PropTypes from 'prop-types';

/** A H1 component to pass in to the most important heading on your page.*/
function Header({header, className=''}) {
  return (
    <h1 className={className}>Here is your {header}</h1>
  )
}

Header.propTypes = {
  /** Message to display */
  header: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Header.defaultProps = {
  header: 'pfReact Components',
  className: 'header'
}

export default Header;
