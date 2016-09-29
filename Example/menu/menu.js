/* @flow */

import React from 'react'
import { View, TouchableNativeFeedback } from 'react-native'
import { Menu } from 'react-native-section-menu'

class CommonMenu extends React.Component {
  render () {
    return (
      <Menu
        header={<View style={{height: 150, backgroundColor: '#27ae60'}} />}
        initialEntry={0}
        tintColor='#27ae60'
        entries={[
          {
            id: 0,
              element: <View style={{flex: 1, backgroundColor: '#95a5a6'}} />,
            title: 'Bookmarks',
            systemIcon: 'bookmarks',
            androidBackground: (TouchableNativeFeedback.Ripple) ? TouchableNativeFeedback.Ripple('grey', false) : null
          },
          {
            id: 1,
              element: <View style={{flex: 1, backgroundColor: '#2c3e50'}} />,
            title: 'Contacts',
            systemIcon: 'contacts',
            androidBackground: (TouchableNativeFeedback.Ripple) ? TouchableNativeFeedback.Ripple('grey', false) : null
          },
          {
            id: 2,
              element: <View style={{flex: 1, backgroundColor: '#ecf0f1'}} />,
            title: 'Search',
            systemIcon: 'search',
            androidBackground: (TouchableNativeFeedback.Ripple) ? TouchableNativeFeedback.Ripple('grey', false) : null
          }
        ]}
      />
    )
  }
}

export default CommonMenu
