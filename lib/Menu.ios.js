/* @flow */

import React, { PropTypes } from 'react'
import { TabBarIOS } from 'react-native'
import MenuEntry from './MenuEntry'

class Menu extends React.Component {
  state: Object;

  constructor (props: Object) {
    super(props)
    console.log(props.entries)
    this.state = {
      selectedItem: props.initialEntry || props.entries[0].id,
    }
  }

  render () {
    return (
      <TabBarIOS {...this.props}>
        {this.props.entries.map(entry => (
          <MenuEntry key={entry.id}
            selected={entry.id === this.state.selectedItem}
            {...entry}
            onPress={() => this.setState({selectedItem: entry.id})}>
            {entry.element}
          </MenuEntry>
        ))}
      </TabBarIOS>
    )
  }
}

Menu.propTypes = {
  ...TabBarIOS.propTypes,

  initialEntry: PropTypes.number,

  entries: PropTypes.arrayOf(PropTypes.shape({
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
