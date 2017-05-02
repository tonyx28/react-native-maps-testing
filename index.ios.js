/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
import KeyboardAvoidingViewExample from './components/keyboard';
import MyMap from './components/map';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');


export default class testmaps extends Component {

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <MyMap />
          <TextInput
            style={styles.textInput} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

// <MapView
//   style={styles.map}
//   initialRegion={{
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }}
//    >
//
// </MapView>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
    width: window.width,
  },
  // map: {
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0
  // }
});

AppRegistry.registerComponent('testmaps', () => testmaps);
