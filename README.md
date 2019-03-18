# react-native-import
Easy to manage, optimised and avoid recurring react-native imports in multiple files.

## Install

 ```bash
npm i -S react-native-import
```

## Config
In root file i.e index.js of project, apply this config
```bash
import RN, { RNConfig } from 'react-native-import';
... // other imports
RNConfig({
    whiteList: [], //white list the component you want to import
    // default components whitelisted : ['AppRegistry', 'View', 'Text', 'StyleSheet', 'Platform']
    // your whitelist components e.g : ['Button', 'Image']
    blackList: [], //black list the component you dont want to import
})

```

## Example

```bash
import React, {Component} from 'react';
import RN from 'react-native-import';

export default class App extends Component {
  render() {
    return (
      <RN.View style={{flex: 1}}>
        <RN.Text>Welcome to React Native Import!</RN.Text>
      </RN.View>
    );
  }
}


```

## License
 Copyright © 2019, [Neel Gala](https://github.com/neel132).
 [MIT](http://vjpr.mit-license.org)
