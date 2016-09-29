# react-native-section-menu

[![Build Status](https://travis-ci.org/APSL/react-native-section-menu.svg?branch=master)](https://travis-ci.org/APSL/react-native-section-menu)

A multi-platform React Native sectioned menu.

<p align="center">
<img src="https://raw.githubusercontent.com/wiki/APSL/react-native-section-menu/menu.ios.gif" alt="iOS menu" width="400">
<img src="https://raw.githubusercontent.com/wiki/APSL/react-native-section-menu/menu.android.gif" alt="Android menu" width="400">
</p>

## Installation

```sh
$ npm i --save-dev react-native-section-menu
```

## Usage

To render a basic menu, take the following code as an example. It will render a green header in Android with a drawer-based animation and a TabBar navigation for iOS.

```js
import { Menu } from 'react-native-section-menu'

class MyMenu extends React.Component {
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
          },
          {
            id: 1,
            element: <View style={{flex: 1, backgroundColor: '#2c3e50'}} />,
            title: 'Contacts',
          },
          {
            id: 2,
            element: <View style={{flex: 1, backgroundColor: '#ecf0f1'}} />,
            title: 'Search',
          }
        ]}
      />
    )
  }
}
```

## API

## License
MIT

## Authors

Álvaro Medina Ballester <amedina apsl.net>
Dani Sastre <sastred apsl.net>
