/* @flow */

import React, { PropTypes } from 'react'
import { TabBarIOS } from 'react-native'

class MenuEntry extends React.Component {
  onPressItem: Function

  constructor (props: Object) {
    super(props)
    this.onPressItem = this._onPressItem.bind(this)
  }

  _onPressItem () {
    this.props.onPress(this.props.id)
  }

  render () {
    const TabBarItem = this.props.itemComponent || TabBarIOS.Item
    return (
      <TabBarItem {...this.props}
        onPress={this.onPressItem}>
        {this.props.children}
      </TabBarItem>
    )
  }
}

MenuEntry.propTypes = {
  ...TabBarIOS.Item.propTypes,
  // The id of the section
  id: PropTypes.number.isRequired,
  // Event required to mark the selected section
  onPress: PropTypes.func.isRequired,
  // The current section to render
  children: PropTypes.element.isRequired,

  // Optional props for using with react-native-vector-icons
  itemComponent: PropTypes.func,
  iconName: PropTypes.string,
  selectedIconName: PropTypes.string,
  iconSize: PropTypes.number,
}

export default MenuEntry
