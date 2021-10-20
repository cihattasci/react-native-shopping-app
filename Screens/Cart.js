import React, {useState} from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import {connect} from 'react-redux';
import Separator from '../Components/Separator'
import CartItem from '../Components/CartItem'
import BottomCheckout from '../Components/BottomCheckout'
import * as actions from '../redux/actions/actions';

const {height} = Dimensions.get('screen');

function Cart(props) {
    const [sizeOne, setSizeOne] = useState(38)
    const [sizeTwo, setSizeTwo] = useState(38)
    return (
      <View style={styles.main}>
        <View style={styles.cartDeliverInfoPart}>
            <Text>Arrives by April 3 to April 9th</Text>
        </View>
        <CartItem
            name={"NikeCourt Lite 2"}
            detail={"Women’s Hard Court Tennis Shoe"}
            price={67}
            image={"https://picsum.photos/200"}
            color={"Blue"}
            size={sizeOne}
            quantity={props.quantity_one}
            discountApply={false}
            incFunc={props.inc_quantity_one}
            decFunc={props.dec_quantity_one}
            setValue={(value) => setSizeOne(value)}
        />
        <Separator />
        <CartItem
            name={"Wilson Hammer 5.3"}
            detail={"Adult Tennis Racket"}
            price={80}
            image={"https://picsum.photos/200"}
            color={"Black"}
            size={sizeTwo}
            quantity={props.quantity_two}
            discountApply={true}
            incFunc={props.inc_quantity_two}
            decFunc={props.dec_quantity_two}
            setValue={(value) => setSizeTwo(value)}
        />
        <BottomCheckout
            size={[sizeOne, sizeTwo]}
            buttonName={"Checkout"}
            toWhere={'Checkout'}
        />
      </View>
    )
}

function mapStateToProps(state) {
  return {
    quantity_one: state.quantityOneReducer,
    quantity_two: state.quantityTwoReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc_quantity_one: () => dispatch(actions.increaseQuantityOne()),
    dec_quantity_one: () => dispatch(actions.decreaseQuantityOne()),
    inc_quantity_two: () => dispatch(actions.increaseQuantityTwo()),
    dec_quantity_two: () => dispatch(actions.decreaseQuantityTwo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    cartDeliverInfoPart: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF9DB',
        height: height*0.05
    },
})