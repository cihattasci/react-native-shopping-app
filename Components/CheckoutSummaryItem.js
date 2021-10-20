import React from 'react'
import { View, Image, StyleSheet, Dimensions, Text} from 'react-native'

const {width, height} = Dimensions.get('screen');

export default function CheckoutSummaryItem(props) {
    return (
        <View style={styles.main}>
            <Image style={styles.image} source={{uri: props.image}}/>
            <View style={styles.attributeContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.attribute}>Color: {props.color}</Text>
                <Text style={styles.attribute}>Size: {props.size}</Text>
                <Text style={styles.attribute}>Quantity: {props.quantity}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>${props.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EEEFF0',
        width: width*0.8,
        height: height*0.12,
        marginTop: 10,
        marginLeft: 10,
    },
    image: {
        width: 80,
        height: 80,
        marginHorizontal: 10
    },
    attributeContainer: {
        justifyContent: 'space-between',
        height: height*0.1
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17
    },
    attribute: {
        color: '#868E96',
        fontSize: 15,
    },
    priceContainer: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#495057'
    },
})
