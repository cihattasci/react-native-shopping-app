import React from 'react'
import { View, TextInput, Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('screen');

export default function SmallInput(props) {
    return (
        <View>
            <TextInput
                style={styles.smallInput}
                placeholder={`${props.placeholder}`}
                placeholderTextColor={'#868E96'}
                keyboardType="numeric"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    smallInput: {
        height: height*0.07,
        width: width*0.39,
        backgroundColor: 'white',
        marginTop: 10,
        paddingLeft: 15,
    }
})