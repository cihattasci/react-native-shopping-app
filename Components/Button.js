import React, {useReducer} from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { reducer } from '../reducer';

const {width, height} = Dimensions.get('screen');

export default function Button(props) {
    const navigation = useNavigation();
    const [state, dispatch] = useReducer(reducer);
    const goToCheckout = () => {
        if (props.toWhere) {
            navigation.navigate(`${props.toWhere}`)
        } else {
            let states = dispatch({type: ""});
            /*states.saveCard ? dispatch({type:"SAVE_CARD_INFO", payload: {
                cardName: states.cardName,
                cardNumber: states.cardNumber,
                month: states.month,
                year: states.year,
                securityCode: states.securityCode,
            }}) : null*/
        }
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
