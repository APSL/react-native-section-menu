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
      selectedItem: props.initialEntry || props.entries[0].id,
    }
  }

  openMenu() {
    this._drawer.openDrawer()
  }

  _renderNavigationView () {
    return (
      <View style={[this.props.containerStyle]}>
        {this.props.header}
        <MenuList items={this.props.entries} selectedItem={this.state.selectedItem}
          onSectionChange={section => {
            this.setState({selectedItem: section})
            this._drawer.closeDrawer()
          }}
        />
      </View>
    )
  }

  _renderContent () {
    const element = this.props.entries.find(entry => entry.id === this.state.selectedItem).element
    if (element) {
      return React.cloneElement(element, {openMenu: this.openMenu.bind(this)})
    }
  }

  render () {
    return (
      <DrawerLayoutAndroid ref={(ref) => {this._drawer = ref}}
        {...this.props}
        renderNavigationView={this._renderNavigationView.bind(this)}>
        {this._renderContent()}
      </DrawerLayoutAndroid>
    )
  }
}

Menu.propTypes = {
  ...DrawerLayoutAndroid.propTypes,

  initialEntry: PropTypes.number,

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
