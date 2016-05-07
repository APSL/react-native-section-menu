/* @flow */

import React from 'react'
import { ListView, StyleSheet, Dimensions } from 'react-native'
import isEqual from 'lodash.isequal'

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
        renderRow={item => (null)}  // TODO
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width - MenuList.DRAWER_OFFSET,
  }
})

// TODO: set right prop types

export default MenuList
