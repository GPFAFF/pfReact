import React from 'react';
import TextInput from 'pfreact/TextInput';

/** Optional TextBox */
export default class ExampleTextInput extends React.Component {
  render() {
    return (
      <TextInput
        className='Optional'
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
       />
    )
  }
}
