/* @flow */

import React, { PropTypes } from 'react'
import { TabBarIOS } from 'react-native'
import MenuEntry from './MenuEntry'

class Menu extends React.Component {
  state: Object;

  constructor (props: Object) {
    super(props)
    this.state = {
      selectedItem: props.entries[0].id,
    }
  }

  render () {
    return (
      <TabBarIOS {...this.props}>
        {this.props.entries.map(entry => (
          <MenuEntry key={entry.id}
            selected={entry.id === this.state.selectedItem}
            title={entry.title}
            systemIcon={entry.systemIcon}
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
  entries: PropTypes.arrayOf(PropTypes.shape({
    element: PropTypes.element.isRequired,
    id: PropTypes.number.isRequired,
    // title: PropTypes.string.isRequired,
    ...TabBarIOS.Item.propTypes,
  })).isRequired,
}

export default Menu
