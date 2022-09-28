import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { reanimatedBackCircelImage, reanimatedOpacity, reanimatedRotate } from './animations';
import { dimensionsVariable, height, width } from './variables';

function Pages ( props )
{


    const reanimatedBackCircel_Image = reanimatedBackCircelImage( props.translateX, props.index )
    const reanimated_Rotate = reanimatedRotate( props.translateX, props.index )
    const reanimated_Opacity = reanimatedOpacity( props.translateX, props.index )


    return (
        <View style={ [ styles.container, { backgroundColor: '#ececec' } ] }>
            <Animated.View style={ [ styles.square, reanimatedBackCircel_Image ] } >
                <Animated.Image source={ props.image } style={ [ styles.img, reanimated_Rotate ] } />
            </Animated.View>
            <Animated.View style={ [ styles.sectionText, reanimated_Opacity ] }>
                <Text style={ { fontSize: 30, marginVertical: 10, fontWeight: "bold" } }>{ props.username }</Text>
                <Text style={ { fontWeight: "bold", textAlign: 'center' } }>{ props.title }</Text>
            </Animated.View>
        </View>
    )


}


export default  Pages 
const styles = StyleSheet.create( {
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    square: {
        width: dimensionsVariable.ITEM_WIDTH,
        height: dimensionsVariable.ITEM_WIDTH,
        backgroundColor: '#d3d3d3',
        // borderRadius: dimensionsVariable.ITEM_WIDTH,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: dimensionsVariable.ITEM_WIDTH + 60,
        height: dimensionsVariable.ITEM_WIDTH + 60,

    },
    sectionText: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
} )