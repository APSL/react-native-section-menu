/* @flow */

import React, { PropTypes } from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

class MenuEntry extends React.Component {
  render () {
    let textStyles = [styles.text]
    if (this.props.isSelected) {
      if (this.props.tintColor) {
        textStyles.push({color: this.props.tintColor})
      } else {
        textStyles.push(selectedStyles.text)
      }
    }

    let contanierStyles = [styles.container]
    if (this.props.isSelected) {
      contanierStyles.push(selectedStyles.container)
    }

    let iconContanierStyles = [styles.iconContainer]
    if (this.props.isSelected) {
      iconContanierStyles.push(selectedStyles.iconContainer)
    }

    let iconElement = this.props.icon
    if (this.props.isSelected) {
      iconElement = React.cloneElement(
        this.props.icon,
        {color: this.props.tintColor || selectedTextColor})
    }

    return (
      <TouchableNativeFeedback
        background={this.props.background}
        onPress={() => this.props.onPress(this.props.id)}>
        <View style={contanierStyles}>
          <View style={iconContanierStyles}>
            {iconElement}
          </View>
          <Text style={textStyles}>
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
  isSelected: PropTypes.bool,
  background: TouchableNativeFeedback.propTypes.background,
  tintColor: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 44,
    height: 48,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    marginRight: 16,
    fontSize: 14,
    fontWeight: 'bold',
  }
})

const selectedTextColor = '#009688'
const selectedBackGroundColor = '#EEEEEE';

const selectedStyles = StyleSheet.create({
  container: {
    backgroundColor: selectedBackGroundColor,
  },
  iconContainer: {
    backgroundColor: selectedBackGroundColor,
  },
  text: {
    color: selectedTextColor,
  },
})

export default MenuEntry
