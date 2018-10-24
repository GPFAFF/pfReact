import React, { Component } from 'react';
import SignIn from 'pfreact/SignIn';

/** Sign In Splash Screen */
export default class ExampleSignIn extends Component {
  onSubmit = (user) => {
    console.log(user);
  }
  render() {
    return <SignIn onSubmit={this.onSubmit} />
  }
}
