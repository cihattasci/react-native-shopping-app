import React from 'react'
import { View, TextInput, Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('screen');

export default function BigInput(props) {
    return (
        <View>
            <TextInput
                style={styles.bigInput}
                placeholder={`${props.placeholder}`}
                placeholderTextColor={'#868E96'}
                keyboardType={props.keyboardType}
                value={props.value}
                onChangeText={value => props.onChangeText(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bigInput: {
        height: height*0.07,
        width: width*0.8,
        backgroundColor: 'white',
        marginTop: 10,
        paddingLeft: 15
    }
})
