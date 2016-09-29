/* @flow */

import React, { PropTypes } from 'react'
import { ListView, StyleSheet, Dimensions } from 'react-native'
import isEqual from 'lodash.isequal'
import MenuEntry from './MenuEntry'

class MenuList extends React.Component {
  static DRAWER_OFFSET: number = 56

  onPressEntry: Function
  renderRow: Function

  constructor (props: Object) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !isEqual(r1, r2)
    })
    this.onPressEntry = this._onPressEntry.bind(this)
    this.renderRow = this._renderRow.bind(this)
  }

  _onPressEntry (section: number) {
    this.props.onSectionChange(section)
  }

  _renderRow (item: Object) {
    return (
      <MenuEntry
        id={item.id}
        title={item.title}
        tintColor={this.props.tintColor}
        icon={item.androidIcon}
        background={item.androidBackground}
        isSelected={this.props.selectedItem === item.id}
        onPress={this.onPressEntry}
      />
    )
  }

  render () {
    return (
      <ListView
        style={styles.container}
        dataSource={this.dataSource.cloneWithRows(this.props.items)}
        renderRow={this.renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width - MenuList.DRAWER_OFFSET,
  },
})

MenuList.propTypes = {
  onSectionChange: PropTypes.func.isRequired,
  selectedItem: PropTypes.number.isRequired,
  tintColor: PropTypes.string,
}

export default MenuList
