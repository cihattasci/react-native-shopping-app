import React, {useReducer} from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import BigInput from './BigInput'
import SmallInput from './SmallInput'
import { reducer } from '../reducer';
import CheckBox from '@react-native-community/checkbox';

const {width, height} = Dimensions.get('screen');

const initialState = {
    cardName: '',
    cardNumber: '',
    month: 0,
    year: 0,
    securityCode: 0,
    saveCard: 0,
}

export default function Payment(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <View style={styles.main}>
            <Text style={styles.titleText}>Payment</Text>
            <View style={styles.paymentContainer}>
                <View style={styles.paymentTitle}>
                    <Icon name="credit-card" size={20} type="entypo" color="black" />
                    <Text style={styles.addCardText}>Add Debit / Credit Card</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <BigInput 
                        keyboardType="default"
                        placeholder="Card Holder's Name"
                        value={state.cardName} 
                        onChangeText={(value) => dispatch({type: "SET_CARD_NAME", payload: value})}
                    />
                    <BigInput 
                        keyboardType="numeric" 
                        placeholder="Card Number"
                        value={state.cardNumber} 
                        onChangeText={(value) => dispatch({type: "SET_CARD_NUMBER", payload: value})}
                    />
                </View>
                <Text style={styles.expireText}>Expire Date</Text>
                <View style={styles.expireContainer}>
                    <View style={styles.smallInputContainer}>
                        <SmallInput
                            placeholder="Month"
                            value={state.month} 
                            onChangeText={(value) => dispatch({type: "SET_MONTH", payload: value})}
                         />
                        <SmallInput 
                            placeholder="Year"
                            value={state.year} 
                            onChangeText={(value) => dispatch({type: "SET_YEAR", payload: value})}
                        />
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <SmallInput 
                            placeholder="Security Code"
                            value={state.securityCode} 
                            onChangeText={(value) => dispatch({type: "SET_SECURITY_CODE", payload: value})}
                        />
                        <Icon style={{marginLeft: 10}}name="info-with-circle" size={25} type="entypo" color="#3498DB" />
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox 
                        value={state.saveCard}
                        onValueChange={(value) => dispatch({type: "SET_SAVE_CARD", payload: value})}
                        disabled={false} />
                        <Text style={styles.checkboxText}>Remember my card for next purchases</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#212529",
    },
    paymentContainer: {
        marginTop: 10,
        width: width*0.9,
        height: height*0.46,
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        padding: 10
    },
    paymentTitle: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    addCardText: {
        fontSize: 15,
        color: '#212529',
        marginLeft: 15,
    },
    expireText: {
        fontSize: 15,
        color: '#212529',
        marginLeft: 15,
        marginTop: 10,
    },
    expireContainer: {
        width: width*0.8, 
        justifyContent: 'center', 
        marginLeft: 10
    },
    smallInputContainer: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between"
    },
    checkboxText: {
      marginLeft: 20,
      fontSize: 14
    },
    checkboxContainer: {
      flexDirection: 'row', 
      marginTop: 10,
      alignItems: 'center',
      marginLeft: 3
    },
})
