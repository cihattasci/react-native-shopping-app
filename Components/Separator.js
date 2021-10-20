import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('screen');

export default function Separator() {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: width,
        height: height*0.015,
        backgroundColor: '#F5F5F5',
        marginTop: 20
    }
})
