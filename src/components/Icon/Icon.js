import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon_List from './Icon_List';

/* Icon component where you can pass in any SVG Path with the className to render the proper Icon */
class Icon extends Component {
  render() {
    const {
      className,
      iconHeight,
      iconWidth,
      iconName,
      backgroundColor,
      fill
    } = this.props;

    const iconStyle = {
      backgroundColor,
      padding: '10px',
      height: iconHeight,
      width: iconWidth,
      fill,
    }

    return (
      Icon_List.map((icon, i) => {
        const Icon = icon[iconName];
        return (
          <div className={className}
            style={iconStyle}
          >
            <Icon
              style={{
                backgroundColor: {backgroundColor},
                padding: '10px',
                fill: {fill}
              }}
              key={i}
              inline='true'
              iconName={iconName}
            />
          </div>
        );
      })
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  iconHeight: PropTypes.string,
  iconWidth: PropTypes.string,
  /* The iconName is pulled from iconList to dynamically load whatever icon name you pass the component. */
  iconName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  className: '',
  iconHeight: '48px',
  iconWidth: '48px',
  iconName: 'A',
  backgroundColor: '#333',
  fill: '#FFF'
}


export default Icon;
