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
} from 'react-native';
import Landing from './Landing';
import Menu from './Menu';




export default class AwesomeProject extends Component {

  renderScene(route, navigator) {
    if (route.name == 'Landing') {
      return <Landing navigator={navigator} {...route.passProps} />
    }
    if (route.name == 'Menu') {
      return <Menu navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return <Navigator
      style={{ flex: 1 }}
      initialRoute={{ name: 'Landing' }}
      renderScene={this.renderScene} />

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
