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


export default class Tabs extends Component {
    _navigate(name) {
        this.props.navigator.push({
            name: 'Home',
            passProps: {
                name: name
            }
        })
    }

    renderScene(route, navigator) {
        if (route.name == 'Main') {
            return <Main navigator={navigator} {...route.passProps} />
        }
        if (route.name == 'Home') {
            return <Home navigator={navigator} {...route.passProps} />
        }
    }

    render() {

        return (
            <View style={styles.container} >

                <Navigator
                    style={{ flex: 1 }}
                    initialRoute={{ name: 'Main' }}
                    renderScene={this.renderScene} />

                <View style={styles.image}>
                    <Image style={styles.imageDim} source={require('./Assets/landing-page.png')}>
                        <Text style={styles.companyTag1} >Food</Text>
                        <Text style={styles.companyTag2} >Panda</Text>
                        <Text style={styles.tagHeading}>WHAT A TWIST. </Text>
                        <Text style={styles.tagContent}>The Panda, the iconic long, slim slick of bread, has{'\n'} traditionally one of the most potent symbols of french{'\n'} culture. </Text>
                    </Image>
                </View>


                <View style={styles.button}  >

                    <TouchableHighlight onPress={() => this._navigate('YOYOYOYOYO')}>
                        <Image source={require('./Assets/Logo.jpg')} />
                    </TouchableHighlight>



                    <TouchableHighlight onPress={() => _navigate('YOYOYOYOYO')} >
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
