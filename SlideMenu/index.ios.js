/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 var LeftComponent = require('./app/LeftComponent');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// var LeftComponent from './app/LeftComponent' ;
// var LeftComponent = require('./app/LeftComponent');
// import {LeftComponent} from  './app/LeftComponent'

export default class SlideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<LeftComponent/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SlideMenu', () => SlideMenu);
