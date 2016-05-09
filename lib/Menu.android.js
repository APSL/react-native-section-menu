/* @flow */

import React, { PropTypes } from 'react'
import {
  View,
  TouchableNativeFeedback,
  DrawerLayoutAndroid
} from 'react-native'
import MenuList from './MenuList'

class Menu extends React.Component {
  state: Object;

  constructor (props: Object) {
    super(props)
    this.state = {
      selectedItem: props.entries[0].id,
    }
  }

  _renderNavigationView () {
    return (
      <View style={[this.props.containerStyle]}>
        {this.props.header}
        <MenuList items={this.props.entries}
          onSectionChange={section => {
            this.setState({selectedItem: section})
            this.refs.drawer.closeDrawer()
          }}
        />
      </View>
    )
  }

  _renderContent () {
    return this.props.entries.find(entry => entry.id === this.state.selectedItem).element
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
    androidIcon: PropTypes.node,
    androidBackground: TouchableNativeFeedback.propTypes.background,
  })).isRequired,

  containerStyle: View.propTypes.style,

  // Optional header
  header: PropTypes.node,
}

export default Menu
