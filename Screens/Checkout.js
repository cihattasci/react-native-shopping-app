import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Separator from '../Components/Separator'
import Payment from '../Components/Payment'
import CheckoutSummary from '../Components/CheckoutSummary'
import BottomCheckout from '../Components/BottomCheckout'
import { Header, Icon } from 'react-native-elements'
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('screen');

export default function Checkout(props) {
    const navigation = useNavigation();
    const goToAddAddress = () => {
        if (!props.route.params) {
            navigation.navigate('AddAddress', {
                size: props.route.params.size
            })
        } else {
            navigation.navigate('AddAddress', {
                name: props.route.params.name,
                code: props.route.params.code,
                phone: props.route.params.phone,
                email: props.route.params.email,
                address: props.route.params.address,
                city: props.route.params.city,
                country: props.route.params.country,
                billingAddress: props.route.params.billingAddress,
                billingType: props.route.params.billingType,
                addressTitle: props.route.params.addressTitle,
                size: props.route.params.size
            })
        }
    }
    const goBack = () => {
        navigation.navigate('Cart')
    }
    return (
        <View style={styles.main}>
            <Header
                containerStyle={{
                    backgroundColor: 'white',
                }}
                leftComponent={
                    <Icon 
                        name={"back"} 
                        type="entypo" 
                        size={25}
                        onPress={goBack}
                    />
                }
                centerComponent={{ text: 'Secure Payment', style: { color: 'black', fontWeight: 'bold', fontSize: 15 } }}
            />
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.titleText}>Shipping</Text>
                    <TouchableWithoutFeedback onPress={goToAddAddress}>
                        {
                            props.route.params?.name ? 
                            <View style={[styles.addAddressContainer, {height: height*0.13}]}>
                                <View>
                                    <Text style={styles.addAddressText}>{props.route.params.name}</Text>
                                    <Text style={styles.addAddressText}>{props.route.params.email}</Text>
                                    <Text style={styles.addAddressText}>{props.route.params.phone}</Text>
                                    <Text style={styles.addAddressText}>{props.route.params.address}</Text>
                                    <Text style={styles.addAddressText}>{props.route.params.city} {props.route.params.country}</Text>
                                </View>
                                <Icon name="chevron-right" type="entypo" size={25} color="#3498DB" />
                            </View>
                            : 
                            <View style={styles.addAddressContainer}>
                                <Text style={styles.addAddressText}>Add Address</Text>
                                <Icon name="chevron-right" type="entypo" size={25} color="#3498DB" />
                            </View>
                        }
                    </TouchableWithoutFeedback>
                    <Separator/>
                    <Payment/>
                    <Separator/>
                    <CheckoutSummary size={props.route.params.size} />
                </View>
            </ScrollView>
            <BottomCheckout
                price={props.price}
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