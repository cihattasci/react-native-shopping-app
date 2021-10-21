import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import {Header, Icon, Image} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
import {connect} from 'react-redux';

function Detail(props) {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.navigate('Cart')
    }
    return (
        <View>
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
                centerComponent={{ text: 'Detail Screen', style: { color: 'black', fontWeight: 'bold', fontSize: 15 } }}
            />
            {
                props.route.params ? 
                <View>
                    <View style={{alignItems: "center"}}>
                        <Image
                            style={styles.image}
                            source={{uri: props.route.params ? "https://picsum.photos/200" : null}}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Name: {props.route.params?.id === 1 ? 'Nike' : 'Wilson' }</Text>
                        <Text style={styles.text}>Size: {props.route.params?.id === 1 ? '38' : '40' }</Text>
                        <Text style={styles.text}>Color: {props.route.params?.id === 1 ? 'Blue' : 'Black' }</Text>
                        <Text style={styles.text}>Quantity: {props.route.params?.id === 1 ? props.quantity_one : props.quantity_two }</Text>
                        <Text style={styles.text}>Price: {props.route.params?.id === 1 ? '67' : '72' }</Text>
                    </View>
                </View> 
                : 
                <View style={styles.noParams}>
                    <Text style={styles.noProductText}>No product available</Text>
                </View>
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

export default connect(mapStateToProps)(Detail);

const styles = StyleSheet.create({
    image: {
        width: width*0.4,
        height: width*0.4,
        borderRadius: 5,
        marginTop: 15
    },
    textContainer: {
        padding: 15,
        height: height*0.2,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    noParams: {
        justifyContent: "center",
        alignItems: "center",
        height: height*0.8
    },
    noProductText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
})
