import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import BigInput from './BigInput'
import SmallInput from './SmallInput'

const {width, height} = Dimensions.get('screen');

export default function Payment(props) {
    return (
        <View style={styles.main}>
            <Text style={styles.titleText}>Payment</Text>
            <View style={styles.paymentContainer}>
                <View style={styles.paymentTitle}>
                    <Icon name="credit-card" size={20} type="entypo" color="black" />
                    <Text style={styles.addCardText}>Add Debit / Credit Card</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <BigInput keyboardType="default" placeholder="Card Holder's Name"/>
                    <BigInput keyboardType="numeric" placeholder="Card Number"/>
                </View>
                <Text style={styles.expireText}>Expire Date</Text>
                <View style={styles.expireContainer}>
                    <View style={styles.smallInputContainer}>
                        <SmallInput placeholder="Month"/>
                        <SmallInput placeholder="Year"/>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <SmallInput placeholder="Security Code"/>
                        <Icon style={{marginLeft: 10}}name="info-with-circle" size={25} type="entypo" color="#3498DB" />
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
        height: height*0.42,
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
    }
})
