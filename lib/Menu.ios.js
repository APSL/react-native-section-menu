/* @flow */

import React, { PropTypes } from 'react'
import { TabBarIOS } from 'react-native'
import MenuEntry from './MenuEntry.ios'

class Menu extends React.Component {
  state: Object
  onPressEntry: Function

  constructor (props: Object) {
    super(props)
    this.state = {
      selectedItem: props.initialEntry || props.entries[0].id,
    }
    this.onPressEntry = this._onPressEntry.bind(this)
  }

  _onPressEntry (id: number) {
    this.setState({selectedItem: id})
  }

  render () {
    return (
      <TabBarIOS {...this.props}>
        {this.props.entries.map(entry => (
          <MenuEntry
            key={entry.id}
            selected={entry.id === this.state.selectedItem}
            {...entry}
            onPress={this.onPressEntry}>
            {entry.element}
          </MenuEntry>
        ))}
      </TabBarIOS>
    )
  }
}

Menu.propTypes = {
  // TabBarIOS props
  ...TabBarIOS.propTypes,

  // A number to mark the entry to render by default
  initialEntry: PropTypes.number,

  // Entries prop structure
  entries: PropTypes.arrayOf(PropTypes.shape({
    // TabBarIOS.Item props
    ...TabBarIOS.Item.propTypes,

    element: PropTypes.element.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,

    // Optional props for using with react-native-vector-icons
    itemComponent: PropTypes.func,
    iconName: PropTypes.string,
    selectedIconName: PropTypes.string,
    iconSize: PropTypes.number,
  })).isRequired,
}

export default Menu
