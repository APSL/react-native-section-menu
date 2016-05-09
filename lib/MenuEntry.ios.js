/* @flow */

import React, { PropTypes } from 'react'
import { TabBarIOS } from 'react-native'

class MenuEntry extends React.Component {
  render () {
    const TabBarItem = this.props.itemComponent || TabBarIOS.Item
    return (
      <TabBarItem {...this.props}>
        {this.props.children}
      </TabBarItem>
    )
  }
}

MenuEntry.propTypes = {
  ...TabBarIOS.Item.propTypes,
  children: PropTypes.element.isRequired,

  // Optional props for using with react-native-vector-icons
  itemComponent: PropTypes.func,
  iconName: PropTypes.string,
  selectedIconName: PropTypes.string,
  iconSize: PropTypes.number,
}

export default MenuEntry
