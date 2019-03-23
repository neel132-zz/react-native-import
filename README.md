# react-native-import
Easy to manage, optimised and avoid recurring react-native and third-party imports in multiple files.

## Install

 ```bash
npm i -S react-native-import
```

## Config
In root file i.e index.js of project, apply this config
```bash
import RN, { RNConfig } from 'react-native-import';
import ThirdParty1 from 'third-party1'; //dummy example
import {ThirdParty2} from 'third-party2'; //dummy example

RNConfig({
    whiteList: [],  // white list the component you want to import from react-native
                    // default components whitelisted:
                    // ['AppRegistry', 'View', 'Text', 'StyleSheet', 'Platform']
                    // your whitelist components e.g:
                    // ['Button', 'Image']
    blackList: [],  // black list the component you dont want to import from whitelisted component
                    // your blacklist components e.g:
                    // ['View', 'Text']
    thirdParty: {   // third-party libraries except react
      ThirdParty1,
      ThirdParty2,
    }
})

```

## Example

```bash
import React, {Component} from 'react';
import RN from 'react-native-import';

// To access the third party modules you can use RN.ThirdParty1/ RN.ThirdParty2

export default class App extends Component {
  render() {
    return (
      <RN.View style={styles.container}>
        <RN.Text>Welcome to React Native Import!</RN.Text>
      </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


```

## License
 Copyright © 2019, [Neel Gala](https://github.com/neel132).
 [MIT](http://vjpr.mit-license.org)
