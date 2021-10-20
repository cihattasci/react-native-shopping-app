import React from 'react'
import { View, TextInput, Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('screen');

export default function AddressSmallInput(props) {
    return (
        <View>
            <TextInput
                style={[styles.addressSmallInput, {width: props.width}]}
                placeholder={`${props.placeholder}`}
                placeholderTextColor={'#868E96'}
                keyboardType="numeric"
                value={props.value}
                onChangeText={value => props.onChangeText(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addressSmallInput: {
        height: height*0.07,
        backgroundColor: 'white',
        marginTop: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#EEEFF0'
    }
})
