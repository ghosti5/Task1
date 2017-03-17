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
// import Tabs from './tabs';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';


export default class Landing extends Component {

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

                <View style={styles.image}>
                    <Image style={styles.imageDim} source={require('./Assets/landing-page.png')}>
                        <Text style={styles.companyTag1} >Food</Text>
                        <Text style={styles.companyTag2} >Panda</Text>
                        <Text style={styles.tagHeading}>WHAT A TWIST. </Text>
                        <Text style={styles.tagContent}>The Panda, the iconic long, slim slick of bread, has{'\n'} traditionally one of the most potent symbols of french{'\n'} culture. </Text>
                    </Image>
                </View>


                <View style={styles.button}  >

                    <TouchableHighlight underlayColor="gray" >
                        <Image source={require('./Assets/Logo.jpg')} />
                    </TouchableHighlight>



                    <TouchableHighlight underlayColor="white" onPress={() => this.props.navigator.pop()} >
                        <Image source={require('./Assets/Home_Btn_nrm.png')} />
                    </TouchableHighlight>


                    <TouchableHighlight underlayColor="white" onPress={() => this._navigate('YOYOYOYOYO')}>
                        <Image source={require('./Assets/Menu_Btn_nrm.png')} />
                    </TouchableHighlight>



                    <TouchableHighlight underlayColor="white" >
                        <Image source={require('./Assets/Order_Btn_nrm.png')} />
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="white" >
                        <Image source={require('./Assets/Notifi_Btn_nrm.png')} />
                    </TouchableHighlight>


                </View>
                <PushController/>



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

    },
    imageDim: {
        width: 400,
        height: 520
    },
    companyTag1: {
        color: 'white',
        paddingLeft: 35,
        paddingTop: 175,
        fontSize: 45,
        justifyContent: 'center',
        fontWeight: 'bold',



    },
    companyTag2: {
        color: 'white',
        paddingLeft: 35,
        justifyContent: 'center',
        fontSize: 50,
        fontWeight: 'bold',

    },
    tagHeading: {
        color: 'white',
        paddingLeft: 35,
        fontWeight: 'bold',

        fontSize: 17,

    },
    tagContent: {
        color: 'white',
        paddingLeft: 35,

        fontSize: 12,

    }

});