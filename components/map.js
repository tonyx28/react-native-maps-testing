import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Keyboard,
    Dimensions,
} from 'react-native';

const window = Dimensions.get('window');

class MyMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      latlng: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      keyboardShow: false,
      keyboardHeight: 1
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  _keyboardDidShow () {
    // alert('Keyboard Shown');
    console.log('Keyboard Shown');
    this.setState({ keyboardShow: true });
    this.setState({ keyboardHeight: 0.65 });
    console.log(this.state.keyboardShow);
  }

  _keyboardDidHide () {
    // alert('Keyboard Hidden');
    console.log('Keyboard Hidden');
    this.setState({ keyboardShow: false });
    this.setState({ keyboardHeight: 1 });
    console.log(this.state.keyboardShow);
  }

  onRegionChange(region){
    this.setState({ region });
    this.setState({ latlng: {
                      latitude: region.latitude,
                      longitude: region.longitude
                    }})
  }

  render() {
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
        >
        <MapView.Marker
          coordinate={this.state.latlng}
        />
        <Text style={styles.coords}>{this.state.region.latitude}, {this.state.region.longitude}</Text>
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",

// iphone resolution: 375w x 667h
  },
  coords: {

  }
});

export default MyMap;
