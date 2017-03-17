'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Navigator,
  Picker,
  AppState,
  Platform,
} from 'react-native';

import PushController from './PushController';
import PushNotification from 'react-native-push-notification';




export default class AwesomeProject extends Component{

    constructor(props) {
        super(props);

        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            seconds: 5,
        };
    }

    componentDidMount() {
      console.log("mounted");
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        console.log("un mounted");
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(appState) {
        if (appState === 'background') {
          console.log("bg");
            let date = new Date(Date.now() + (this.state.seconds * 1000));

            if (Platform.OS === 'ios') {
                date = date.toISOString();
            }

            PushNotification.localNotificationSchedule({
                message: "My Notification Message",
                date,
            });
        }
    }


  render() {
      return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Choose your notification time in seconds.
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={(seconds) => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker>
        <PushController />
      </View>
);

  }
};




var styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  heading: {
    fontSize: 22,
    marginBottom: 10
  },
  button: {
    flex: 1,
    justifyContent: 'space-around',

    alignItems: 'center',
    flexDirection: 'row',

  },
  buttonText: {
    fontSize: 20
  },
  image: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  imageDim: {
    width: 400,
    height: 520
  },
  companyTag1: {
    color: 'white',
    paddingLeft: 35,
    paddingTop: 175,
    fontSize: 50,
    justifyContent: 'center',


  },
  companyTag2: {
    color: 'white',
    paddingLeft: 35,
    justifyContent: 'center',
    fontSize: 55,

  },
  tagHeading: {
    color: 'white',
    paddingLeft: 35,

    fontSize: 20,

  },
  tagContent: {
    color: 'white',
    paddingLeft: 35,

    fontSize: 14,

  }

});

AppRegistry.registerComponent('AwesomeProject', function () {

  return AwesomeProject;
});
