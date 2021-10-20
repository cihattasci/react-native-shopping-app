import React from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export default function Button(props) {
    const navigation = useNavigation();
    const goToCheckout = () => {
        navigation.navigate(`${props.toWhere}`)
    }
    return (
        <View>
            <TouchableWithoutFeedback onPress={goToCheckout}>
                <View style={styles.button}>
                    <Text style={styles.text}>{props.buttonName}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498DB',
        justifyContent: 'center',
        alignItems: 'center',
        width: width*0.45,
        height: height*0.07,
        borderRadius: 5
    },
    text: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
})
