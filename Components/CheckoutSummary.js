import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CheckoutSummaryItem from './CheckoutSummaryItem'
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('screen');

function CheckoutSummary(props) {
    return (
        <View style={styles.main}>
            <View style={styles.summaryTopContainer}>
                <Text>2 items</Text>
                <View style={styles.deliveryInfo}>
                    <Text>Arrives by April 3 to April 9th</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <CheckoutSummaryItem
                        name={'nike'}
                        color={'blue'}
                        quantity={props.quantity_one}
                        price={67}
                        image={"https://picsum.photos/200"}
                        size={props.size[0]}
                    />
                    <CheckoutSummaryItem
                        name={'nike'}
                        color={'blue'}
                        quantity={props.quantity_two}
                        price={67}
                        image={"https://picsum.photos/200"}
                        size={props.size[1]}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

function mapStateToProps(state) {
    return {
      quantity_one: state.quantityOneReducer,
      quantity_two: state.quantityTwoReducer
    };
}

export default connect(mapStateToProps)(CheckoutSummary);

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        marginTop: 10
    },
    summaryTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width*0.9,
    },
    deliveryInfo: {
        width: width*0.5,
        height: height*0.03,
        backgroundColor: '#FFF9DB',
        alignItems: 'center',
        justifyContent: 'center',
    }
})