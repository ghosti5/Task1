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
import Restaurant from './restaurantDetails';

var Grid = React.createClass({

    render: function () {

        return (


            <View style={{
                flex: 9,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
        


                //flexWrap: 'wrap',
                // flexShrink: 2,
            }}>

                <View style={{
                    flex: 9,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'stretch',
              


                }}>
                    <View style={{ backgroundColor: 'white',  flex: 9 }} >
                        <Image source={require('./Assets/imgmenu1.png')} />
                        <Restaurant />
                    </View>

                    <View style={{ backgroundColor: 'white', flex: 9 }} >
                        <Image source={require('./Assets/imgmenu2.png')} />
                        <Restaurant />
                    </View>
                </View>



                <View style={{
                    flex: 9,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'stretch',
               


                }}>

                    <View style={{ backgroundColor: 'white',flex: 9, }} >
                        <Image source={require('./Assets/imgmenu3.png')} />
                        <Restaurant />
                    </View>

                    <View style={{ backgroundColor: 'white', flex: 9, }} >
                        <Image source={require('./Assets/imgmenu4.png')} />
                        <Restaurant />
                    </View>
                </View>


                <View style={{
                    flex: 9,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'stretch',
             


                }}>
                    <View style={{ backgroundColor: 'white', flex: 9, }} >
                        <Image source={require('./Assets/imgmenu5.png')} />
                        <Restaurant />
                    </View>

                    <View style={{ backgroundColor: 'white', flex: 9, }} >
                        <Image source={require('./Assets/imgmenu6.png')} />
                        <Restaurant />
                    </View>
                </View>

            </View>





        );
    }




})

module.exports = Grid