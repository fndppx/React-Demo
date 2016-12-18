/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,

} from 'react-native';

var NavDemo = React.createClass({

    onRightButtonPress:function () {
        this.refs.nav.push({
            title:'我是一只鱼',
            component:ForRightScene
        })
    },
    render() {
        return (
            <NavigatorIOS ref="nav"
                          style = {styles.container}
                          initialRoute={{
                               component:HomeScene,
                               title:'back',
                               rightButtonTitle:'more',
                               onRightButtonPress:this.onRightButtonPress
            }}/>
        );
    }
})

var HomeScene = React.createClass({
    onPress(){
        this.props.navigator.push({
            title:'我是一只鸟',
            component:ForRightScene
        });
    },

    render(){
        return(
            <View style={[styles.scene,{backgroundColor:'gray'}]}>
              <TouchableHighlight onPress = {this.onPress}>
                <Text>
                  我在你身边飞来飞去
                </Text>
              </TouchableHighlight>

            </View>
        );
    }

});


var  ForRightScene = React.createClass({
    render(){
        return(
            <View style={[styles.scene,{backgroundColor:'Black'}]}>
              <Text> 哎呦不错额! </Text>
            </View>
        )
    }
})


var  ForTouchScene = React.createClass({
    render(){
        return(
            <View style={[styles.scene,{backgroundColor:'gray'}]}>
              <Text>啊打发</Text>
            </View>
        )
    }

})
var  styles = StyleSheet.create({
    container:{
        flex:1
    },
    scene:{
        padding:10,
        paddingTop:74,
        flex:1,
    }
})


AppRegistry.registerComponent('NavDemo', () => NavDemo);
