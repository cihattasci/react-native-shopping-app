import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen');

export default function AddressPartTitle(props) {
    return (
        <View style={styles.main}>
            <View style={styles.orderContainer}>
                <Text style={styles.orderText}>{props.order}</Text>
            </View>
            <Text style={styles.titleText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    orderContainer: {
        width: 30,
        height: 30,
        borderWidth:1,
        borderRadius: 15,
        borderColor: '#3498DB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3498DB'
    },
    titleText: {
        color: '#212529',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})