/**
 * Created by SXJH on 16/12/22.
 */
import React, { Component } from 'react';
import {
    WebView,
    View
} from 'react-native';

var Canvas = React.createClass({
    propTypes:{
        context:React.PropTypes.object,
        render:React.PropTypes.func.isRequired
    },
    render(){
        var contextString = JSON.stringify(this.props.context);
        var renderString = this.props.render.toSting();
        return(
            <View>
                <WebView automaticallyAdjustContentInsets={false}
                html={"<style>*{margin: 0;padding: 0;}canvas{position: absolute;transform: translateZ(0);}</style><canvas></canvas>"}>
            </View>
        )
    }
})
