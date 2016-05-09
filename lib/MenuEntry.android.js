/* @flow */

import React, { PropTypes } from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

class MenuEntry extends React.Component {
  render () {
    return (
      <TouchableNativeFeedback
        background={this.props.background}
        onPress={() => this.props.onPress(this.props.id)}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            {this.props.icon}
          </View>
          <Text style={styles.text}>
            {this.props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

MenuEntry.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onPress: PropTypes.func.isRequired,
  background: TouchableNativeFeedback.propTypes.background,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    marginRight: 16,
    fontSize: 16,
  }
})

export default MenuEntry
