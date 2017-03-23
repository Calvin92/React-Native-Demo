import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

import SecondKillContainer from './App/Containers/SecondKillContainer'

class MyReactNativeDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SecondKillContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

AppRegistry.registerComponent('MyReactNativeDemo', () => MyReactNativeDemo)
