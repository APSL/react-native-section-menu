/* @flow */

import React, { PropTypes } from 'react'
import { ListView, StyleSheet, Dimensions } from 'react-native'
import isEqual from 'lodash.isequal'
import MenuEntry from './MenuEntry'

class MenuList extends React.Component {
  static DRAWER_OFFSET = 56;

  constructor (props: Object) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !isEqual(r1, r2)
    })
  }

  render () {
    return (
      <ListView
        style={styles.container}
        dataSource={this.dataSource.cloneWithRows(this.props.items)}
        renderRow={item => (
          <MenuEntry id={item.id}
            title={item.title}
            tintColor={this.props.tintColor}
            icon={item.androidIcon}
            background={item.androidBackground}
            isSelected={this.props.selectedItem === item.id}
            onPress={section => this.props.onSectionChange(section)}
          />
        )}
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
