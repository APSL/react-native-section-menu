/* @flow */

import React, { PropTypes } from 'react'
import {
  View,
  TouchableNativeFeedback,
  DrawerLayoutAndroid
} from 'react-native'
import MenuList from './MenuList'

class Menu extends React.Component {
  state: Object
  renderNavigationView: Function
  onSectionChange: Function

  constructor (props: Object) {
    super(props)
    this.state = {
      selectedItem: props.initialEntry || props.entries[0].id,
    }
    this.renderNavigationView = this._renderNavigationView.bind(this)
    this.onSectionChange = this._onSectionChange.bind(this)
  }

  openMenu() {
    this._drawer.openDrawer()
  }

  _onSectionChange (section: number) {
    this.setState({selectedItem: section})
    this._drawer.closeDrawer()
  }

  openMenu() {
    this._drawer.openDrawer()
  }

  _renderNavigationView () {
    return (
      <View style={[this.props.containerStyle]}>
        {this.props.header}
        <MenuList
          items={this.props.entries}
          selectedItem={this.state.selectedItem}
          tintColor={this.props.tintColor}
          onSectionChange={this.onSectionChange}
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
      <DrawerLayoutAndroid
        ref={(ref) => {this._drawer = ref}}
        {...this.props}
        renderNavigationView={this.renderNavigationView}>
        {this._renderContent()}
      </DrawerLayoutAndroid>
    )
  }
}

Menu.propTypes = {
  // DrawerLayoutAndroid props
  ...View.propTypes,
  drawerBackgroundColor: PropTypes.string,
  drawerLockMode: DrawerLayoutAndroid.propTypes.drawerLockMode,
  drawerPosition: DrawerLayoutAndroid.propTypes.drawerPosition,
  drawerWidth: DrawerLayoutAndroid.propTypes.drawerWidth,
  keyboardDismissMode: DrawerLayoutAndroid.propTypes.keyboardDismissMode,
  onDrawerClose: DrawerLayoutAndroid.propTypes.onDrawerClose,
  onDrawerOpen: DrawerLayoutAndroid.propTypes.onDrawerOpen,
  onDrawerSlide: DrawerLayoutAndroid.propTypes.onDrawerSlide,
  onDrawerStateChanged: DrawerLayoutAndroid.propTypes.onDrawerStateChanged,
  statusBarBackgroundColor: PropTypes.string,

  // A number to mark the entry to render by default
  initialEntry: PropTypes.number,

  // Entries prop structure
  entries: PropTypes.arrayOf(PropTypes.shape({
    element: PropTypes.element.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,

    androidIcon: PropTypes.node,
    androidBackground: TouchableNativeFeedback.propTypes.background,
    tintColor: PropTypes.string,
  })).isRequired,

  // The style of the parent container view
  containerStyle: View.propTypes.style,

  // Optional header
  header: PropTypes.node,
}

export default Menu
