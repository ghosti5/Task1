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

var Restaurant = React.createClass({

    render: function () {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
              


            }}>

                <View style={{
                
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',


                }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>CAFE xyz</Text>
                    <Text style={{ fontSize: 14, color: '#767373' }}>casual</Text>
                    <Text style={{ fontSize: 13, color: 'orange' }}>Open now   </Text>


                </View>


                <View style={{
                
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',


                }}>
                  <Text style={{ fontSize: 15, color: 'orange',paddingLeft:60,paddingRight:20 }}>4.0
                   <Image  source={require('./Assets/star.png')} >
                   </Image>
                   </Text>

                </View>
            </View>



        );
    }




})

module.exports = Restaurant