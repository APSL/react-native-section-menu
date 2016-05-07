/* @flow */

import React, { PropTypes } from 'react'
import { DrawerLayoutAndroid } from 'react-native'
import MenuList from './MenuList'

class Menu extends React.Component {
  state: Object;

  super(props)
    this.state = {
      selectedItem: props.entries[0].id,
    }
  }

  _renderNavigationView () {
    return (
      <View style={[this.props.navigationStyle]}>
        <MenuList items={this.props.entries} />
      </View>
    )
  }

  _renderContent () {
    return this.entries.find(entry => entry.id === this.state.selectedItem).element
  }

  render () {
    return (
      <DrawerLayoutAndroid ref='drawer'
        {...this.props}
        renderNavigationView={this._renderNavigationView.bind(this)}>
        {this._renderContent()}
      </DrawerLayoutAndroid>
    )
  }
}

Menu.propTypes = {
  ...DrawerLayoutAndroid.propTypes,

  entries: PropTypes.arrayOf(PropTypes.shape({
    element: PropTypes.element.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default Menu