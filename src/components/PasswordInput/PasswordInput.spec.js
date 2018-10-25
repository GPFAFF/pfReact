import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('toggles input type when show/hide password is clicked', () => {
  const wrapper = shallow(
    <PasswordInput
      htmlId="test"
      name="test"
      value=""
      onChange={() => {}}
      showVisibilityToggle
    />
  );

  expect(wrapper.find({type: 'password'})).toHaveLength(1);
  expect(wrapper.find({type: 'text'})).toHaveLength(0);

  wrapper.find('button').simulate('click');

  expect(wrapper.find({type: 'password'})).toHaveLength(0);
  expect(wrapper.find({type: 'text'})).toHaveLength(1);
});

test('hides password quality by default', () => {
  const tree = renderer.create(
    <PasswordInput
      htmlId='test'
      name='test'
      onChange={() => {}}
      value='Uisi37#8iad'
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('shows password quality when enabled and password is entered', () => {
  const tree = renderer.create(
    <PasswordInput
      htmlId='test'
      name='test'
      onChange={() => {}}
      showQuality
      value='Uisi37#8iad'
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
