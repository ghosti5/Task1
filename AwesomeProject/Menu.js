
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
  ScrollView,
} from 'react-native';
import Grid from './grid';
import Restaurant from './restaurantDetails';


export default class Menu extends Component {
  _navigate(name) {
    this.props.navigator.push({
      name: 'Menu',
      passProps: {
        name: name
      }
    })
  }
  render() {
    return (
      <View style={styles.container} >
        <TouchableHighlight style={{ width: 180, height: 20, backgroundColor: 'white' }} onPress={() => this.props.navigator.pop()}>
          <Text style={{color:'black'}} >GO Back</Text>
        </TouchableHighlight>


        <View style={styles.image}>

          <Grid />


        </View>


        <View style={styles.button}  >

          <TouchableHighlight onPress={() => this._navigate('YOYOYOYOYO')}>
            <Image source={require('./Assets/Logo.jpg')} />
          </TouchableHighlight>



          <TouchableHighlight onPress={() => this._navigate('YOYOYOYOYO')} >
            <Image source={require('./Assets/Home_Btn_nrm.png')} />
          </TouchableHighlight>


          <TouchableHighlight onPress={() => this._navigate('YOYOYOYOYO')}>
            <Image source={require('./Assets/Menu_Btn_nrm.png')} />
          </TouchableHighlight>



          <TouchableHighlight onPress={() => this._navigate('YOYOYOYOYO')}>
            <Image source={require('./Assets/Order_Btn_nrm.png')} />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this._navigate('YOYOYOYOYO')}>
            <Image source={require('./Assets/Notifi_Btn_nrm.png')} />
          </TouchableHighlight>


        </View>
      </View>
    )
  }
}

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
 
    alignItems: 'center'

  },
  grid: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 20,
    borderColor: 'green',
    alignItems: 'center',


  },
  subgrid: {

    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 20,
    borderColor: 'green',
    alignItems: 'center',


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