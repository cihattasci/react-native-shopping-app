import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Button from './Button'
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('screen');

function BottomCheckout(props) {
    return (
        <View style={[styles.main, {height: props.info ? height*0.15 : height*0.1}]}>
            <View style={styles.textContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.priceText}>${props.quantity_two*72+props.quantity_one*67}</Text>
            </View>
            <Button toWhere={props.toWhere} buttonName={props.buttonName} />
            {
                props.info ?
                <Text style={styles.infoText}>{props.info}</Text>
                : null
            }
        </View>
    )
}

function mapStateToProps(state) {
    return {
      quantity_one: state.quantityOneReducer,
      quantity_two: state.quantityTwoReducer
    };
}

export default connect(mapStateToProps)(BottomCheckout);

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 100,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10,
        paddingHorizontal: 25
    },
    textContainer: {
        marginLeft: 20
    },
    totalText: {
        color: 'black',
        fontSize: 15,
    },
    priceText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 7
    },
    infoText: {
        position: 'absolute',
        bottom: 1,
        right: 0,
        left: 45,
        fontSize: 10,
        color: '#868E96'
    }
})