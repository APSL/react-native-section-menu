import { View } from 'react-native'
import React from 'react'
import Menu from '../Menu.ios'
import renderer from 'react-test-renderer'

describe('Menu', () => {
  beforeEach(() => {
    jest.mock('TabBarIOS', () => {
      const RealComponent = require.requireActual('TabBarIOS')
      const React = require('React');
      class TabBarIOS extends React.Component {
        static Item = 'TabBarItemIOS'
        render() {
          return React.createElement('TabBarIOS', this.props, this.props.children);
        }
      }
      TabBarIOS.propTypes = RealComponent.propTypes;
      return TabBarIOS;
    });
  })
  test('Renders', () => {
    const tree = renderer.create(
      <Menu
        entries={[
          {id: 0, element: <View />, title: 'First'},
          {id: 1, element: <View />, title: 'Second'},
          {id: 2, element: <View />, title: 'Third'}
        ]}
      />
    )
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })
})
