/* @flow */

import React from 'react'
import { AppRegistry } from 'react-native'
import CommonMenu from './menu'

class menu extends React.Component {
  render() {
    return (
      <CommonMenu />
    )
  }
}

AppRegistry.registerComponent('menu', () => menu)
