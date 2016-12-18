/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    ListView,
    View,
    Text,
    Image,
} from 'react-native';

var BASE_URL = 'https://api.github.com/search/repositories?q=';

var ReactDemo = React.createClass ({

    //简单的搜索列表
    render: function() {
        return (
            <TabBarIOS tintColor="white"
                       barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="图书"
                    selected={this.state.selectedTab === '图书'}
                    icon={require('image!book')}
                    onPress={() => {
            this.setState({
              selectedTab: '图书'
            });
          }}>
                    <Navigation component={Book}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="电影"
                    selected={this.state.selectedTab === '电影'}
                    icon={require('image!movie')}
                    onPress={() => {
            this.setState({
              selectedTab: '电影'
            });
          }}>
                    <Navigation component={Movie}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="音乐"
                    selected={this.state.selectedTab === '音乐'}
                    icon={require('image!music')}
                    onPress={() => {
            this.setState({
              selectedTab: '音乐'
            });
          }}>
                    <Navigation component={Music}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
})

AppRegistry.registerComponent('ReactDemo', () => ReactDemo);
