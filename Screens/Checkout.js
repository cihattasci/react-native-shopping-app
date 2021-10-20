import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements'
import Separator from '../Components/Separator'
import Payment from '../Components/Payment'
import CheckoutSummary from '../Components/CheckoutSummary'
import BottomCheckout from '../Components/BottomCheckout'

const {width, height} = Dimensions.get('screen');

export default function Checkout(props) {
    const navigation = useNavigation();
    const goToAddAddress = () => {
        navigation.navigate('AddAddress')
    }
    return (
        <View style={styles.main}>
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.titleText}>Shipping</Text>
                    <TouchableWithoutFeedback onPress={goToAddAddress}>
                        <View style={styles.addAddressContainer}>
                            <Text style={styles.addAddressText}>Add Address</Text>
                            <Icon name="chevron-right" type="entypo" size={25} color="#3498DB" />
                        </View>
                    </TouchableWithoutFeedback>
                    <Separator/>
                    <Payment/>
                    <Separator/>
                    <CheckoutSummary/>
                </View>
            </ScrollView>
            <BottomCheckout
                price={147}
                buttonName={"Pay Now"}
                info={"This is the final step, after you touching Pay Now button, the payment will be transaction"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#212529",
        left: -150
    },
    addAddressContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 10,
        width: width*0.93,
        height: height*.065,
        borderRadius: 5,
        alignItems: 'center'
    },
    addAddressText: {
        color: '#212529',
        fontSize: 15
    },
})