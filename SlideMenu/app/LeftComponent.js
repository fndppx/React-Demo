/**
 * Created by SXJH on 16/12/19.
 */
'use strict'

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
} = React;


var  LeftComponent = React.createClass({
    render:function () {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Left</Text>
            </View>

        );

    }
});



var  styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
});
module.exports = LeftComponent;