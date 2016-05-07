/* @flow */

import React, { PropTypes } from 'react'
import { TabBarIOS } from 'react-native'

class MenuEntry extends React.Component {
  render () {
    return (
      <TabBarIOS.Item {...this.props}>
        {this.props.children}
      </TabBarIOS.Item>
    )
  }
}

MenuEntry.propTypes = {
  ...TabBarIOS.Item.propTypes,
  children: PropTypes.element.isRequired,
}

export default MenuEntry
