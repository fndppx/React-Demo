/**
 * Created by SXJH on 16/12/19.
 */


var  React = require('react-native');
var  {
    LayoutAnimation,
    PanResponder,
    StyleSheet,
    View,

} = React;



var  AnimationExperimental = require('AnimationExperimental');
var  Dimensions = require('Dimensions');
var  screenWidth = Dimensions.get('window').width;
console.log(AnimationExperimental.startAnimation);
var  SlideMenu = React.createClass({
    componentWillMount:function () {
        this.offset = 0
        this._panGesture = PanResponder.create({
            onMoveShouldSetPanResponder:(evt,gestureState) => {
                return Math.abs(gestureState.dx)>Math.abs(gestureState.dy)
                    && Math.abs(gestureState.dx)>10
            },

            onPanResponderGrant:(evt, gestureState) => this.left = 0,
            onPanResponderMove:(evt,gestureState) => this.moveCenterView(gestureState.dx),
            onPanResponderRelease:(evt,gestureState) => this.moveFinished,
            onPanResponderTerminate:this.moveFinished,
        })
    },


    moveCenterView:function (left) {
        if (!this.center)return;
        if ((this.offset+left)<0){
            this.left = -this.offset
        }else{
            this.left = left
        }
        this.center.setNativeProps({left:this.offset+this.left})
    },

    moveFinished:function () {
        if (this.center)return;
        var offset = this.offset + this.left
        if (this.offset === 0){
            if (offset > screenWidth * 0.25){
                this.offset = screenWidth * 0.75
            }
        }else {
            if (offset < screenWidth * 0.5){
                this.offset = 0
            }
        }
        AnimationExperimental.startAnimation(this.center,400,0,'easeInOut',{'anchorPoint.x':0,'position.x':this.offset});
        LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
        this.center.setNativeProps({left:this.offset})
    },

    render:function () {
        var centerView = this.props.renderCenterView?this.props.renderCenterView():null
        var  leftView = this.props.renderLeftView?this.props.renderLeftView():null

        return(
            <View style={[styles.container,this.props.styles]}>
                <View style={styles.left}>
                    {leftView}
                </View>
                <View style={[styles.center,{left:this.offset}]}
                      ref = {(center)=>this.center = center}
                    {...this._panGesture.panHandlers}>
                    {centerView}
                </View>
            </View>
        )

    },

})

var  styles = StyleSheet.create({
    container:{
        flex:1,
    },
    center:{
        flex:1,
        backgroundColor:'red',
    },
    left:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        backgroundColor:'red',
    },
})

var animations = {
    layout:{
        spring:{
            duration:750,
            create:{
                duration:300,
                type:LayoutAnimation.Types.easeInEaseOut,
                property:LayoutAnimation.Properties.opacity,
            },
            update:{
                type:LayoutAnimation.Types.spring,
                springDamping:400,
            },
        },

        easeInEaseOut:{
            duration:300,
            create:{
                type:LayoutAnimation.Types.easeInEaseOut,
                property:LayoutAnimation.Properties.scaleXY,
            },
            update:{
                delay:100,
                type:LayoutAnimation.Types.easeInEaseOut,

            },

        },
    },
};

module.exports = SlideMenu;