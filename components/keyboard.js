'use strict';

import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';


class KeyboardAvoidingViewExample extends Component {


  render() {
    return (
      <View>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TextInput
            placeholder="Current Location"
            style={styles.textInput} />
          <TextInput
            placeholder="Destination"
            style={styles.textInput} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
    width: 350,
  },
  segment: {
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    left: 10,
  }
});

export default KeyboardAvoidingViewExample;
