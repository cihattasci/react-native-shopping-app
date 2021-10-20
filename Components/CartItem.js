import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native'
import Dropdown from './Dropdown';
import { Icon } from 'react-native-elements'

const {width, height} = Dimensions.get('screen');
const numbers = ["38", "39", "40", "41"]

function CartItem(props) {

    const share = () => {
        alert(props.name)
    }

    return (
        <View style={styles.main}>
            <View style={styles.topContainer}>
                <View style={styles.topTextContainer}>
                    <Text style={styles.productName}>{props.name}</Text>
                    <Text style={styles.productDetail}>{props.detail}</Text>
                </View>
                <View style={styles.priceContainer}>
                    {
                        !props.discountApply ? 
                        <Text style={styles.productPrice}>${props.price}</Text>
                        : 
                        <View>
                            <Text style={styles.productDiscountPrice}>${props.price}</Text>
                            <Text style={styles.productPrice}>${props.price*0.9}</Text>
                        </View>
                    }
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <ImageBackground
                    style={styles.productImage}
                    source={{uri: props.image}}
                >
                <Icon
                    name="share-alternative"
                    type="entypo"
                    size={25}
                    color="white"
                    style={{
                        marginTop: 110,
                        marginLeft: 110
                    }}
                    onPress={share}
                />
                </ImageBackground>
                <View style={styles.labelContainer}>
                    <Text style={styles.labelText}>Color</Text>
                    <Text style={styles.labelText}>Size</Text>
                    <Text style={styles.labelText}>Quantity</Text>
                </View>
                <View style={styles.labelContainer2}>
                    <Text style={styles.labelColorText}>{props.color}</Text>
                    <View style={{width: 50, marginRight: 50}}>
                        <Dropdown setValue={props.setValue} data={numbers} width={100} height={40} />
                    </View>
                    <View style={styles.counter}>
                        <Text onPress={props.decFunc} style={styles.counterDec}>-</Text>
                        <Text style={styles.counterText}>{props.quantity}</Text>
                        <Text onPress={props.incFunc} style={styles.counterInc}>+</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItem;

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        paddingHorizontal: 15
    },
    topContainer: {
        height: height*0.1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topTextContainer: {
        justifyContent: 'center'
    },
    productName: {
        color: 'black',
        fontSize: 15,
        marginBottom: 10
    },
    productDetail: {
        color: '#868E96',
        fontSize: 11
    },
    priceContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    productPrice: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    bottomContainer: {
        flexDirection: 'row',
    },
    productImage: {
        height: 153,
        width: 160,
        marginRight: 15
    },
    labelContainer: {
        justifyContent: 'space-between'
    },
    labelContainer2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20
    },
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width*0.45
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },
    labelColorText: {
        fontSize: 15,
        color: 'black'
    },
    counter: {
        width: 100,
        height: 40,
        backgroundColor: 'white',
        borderColor: '#EEEFF0',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    counterDec: {
        fontSize: 20,
        color: 'red'
    },
    counterText: {
        fontSize: 15,
    },
    counterInc: {
        fontSize: 20,
        color: 'blue'
    },
    productDiscountPrice: {
        textDecorationLine: 'line-through',
        color: '#868E96',
        fontSize: 13
    }
})