import React, {Component} from 'react';
import PasswordInput from 'pfreact/PasswordInput';

/** Password Field */
class ExamplePasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    }
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }

  render() {
    return (
      <div>
        <PasswordInput
          htmlId='password-input'
          name='password'
          onChange={ event => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          showVisibilityToggle
          quality={this.getQuality()}
          {...this.props}
        />
      </div>
    )
  }
}

export default ExamplePasswordInput;
