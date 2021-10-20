import React, {useEffect, useReducer} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import AddressPartTitle from '../Components/AddressPartTitle';
import AddressBigInput from '../Components/AddressBigInput';
import AddressSmallInput from '../Components/AddressSmallInput';
import Dropdown from '../Components/Dropdown';
import CheckBox from '@react-native-community/checkbox';
import RadioForm from 'react-native-simple-radio-button';
import { useNavigation } from '@react-navigation/native';
import {reducer} from '../reducer';
import { Header, Icon } from 'react-native-elements';

const {width, height} = Dimensions.get('screen');
const cities = ["Adana", "İstanbul", "Kocaeli", "Trabzon"]
const countries = ["ABD", "Almanya", "İsveç", " Türkiye"]

var radio_props = [
  {label: 'Personal', value: 0 },
  {label: 'Commercial', value: 1 }
];
 

const initialState = {
  name: '',
  code: '',
  phone: 0,
  email: '',
  addressTitle: '',
  address: '',
  city: '',
  country: '',
  billingAddress: 0,
  billingType: 0,
}

export default function AddAddress(props) {
    const navigation = useNavigation();
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      dispatch({type: "SET_NAME", payload: props.route.params?.name})
      dispatch({type: "SET_CODE", payload: props.route.params?.code})
      dispatch({type: "SET_PHONE", payload: props.route.params?.phone})
      dispatch({type: "SET_EMAIL", payload: props.route.params?.email})
      dispatch({type: "SET_ADDRESS_TITLE", payload: props.route.params?.addressTitle})
      dispatch({type: "SET_ADDRESS", payload: props.route.params?.address})
      dispatch({type: "SET_CITY", payload: props.route.params?.city})
      dispatch({type: "SET_COUNTRY", payload: props.route.params?.country})
      dispatch({type: "SET_BILLING_ADDRESS", payload: props.route.params?.billingAddress})
      dispatch({type: "SET_BILLING_TYPE", payload: props.route.params?.billingType})
    }, [])
    let userCanSave = state.name && state.phone && state.email && state.address
    const goBack = () => {
        if (userCanSave) {
          navigation.navigate('Checkout', {
              name: state.name,
              code: state.code,
              phone: state.phone,
              email: state.email,
              address: state.address,
              addressTitle: state.addressTitle,
              city: state.city,
              country: state.country,
              billingAddress: state.billingAddress,
              billingType: state.billingType,
          })
        } else {
          navigation.navigate('Checkout')
        }
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
                centerComponent={{ text: 'Add Address', style: { color: 'black', fontWeight: 'bold', fontSize: 15 } }}
            />
        <ScrollView>
          <Text style={styles.infoLabel}>*Required Fields</Text>
          <AddressPartTitle
            order={1}
            title={"Recipents Information"}
          />
          <View style={{alignItems: "center"}}>
            <AddressBigInput value={state.name} onChangeText={(value) => dispatch({type: "SET_NAME", payload: value})} placeholder="Name and Surname*" />
            <View style={{flexDirection: "row", justifyContent:"space-between", width: width*0.94}}>
              <AddressSmallInput value={state.code} onChangeText={(value) => dispatch({type: "SET_CODE", payload: value})} placeholder="+90" width={width*0.2} />
              <AddressSmallInput value={state.phone} onChangeText={(value) => dispatch({type: "SET_PHONE", payload: value})} placeholder="Phone Number*" width={width*0.72} />
            </View>
          </View>
          <Text style={styles.infoLabel}>For shipping related questions only.</Text>
          <AddressBigInput value={state.email} onChangeText={(value) => dispatch({type: "SET_EMAIL", payload: value})} placeholder="E-mail Address*" />
          <Text style={styles.infoLabel}>This address will be used to send you order and bill details.</Text>
          <AddressPartTitle
            order={2}
            title={"Shipping Address"}
          />
          <AddressBigInput value={state.addressTitle} onChangeText={(value) => dispatch({type: "SET_ADDRESS_TITLE", payload: value})} placeholder="Address Title (Optinal)" />
          <Text style={styles.infoLabel}>For estimating if the place is opened or closed on the weekends.</Text>
          <AddressBigInput value={state.address} onChangeText={(value) => dispatch({type: "SET_ADDRESS", payload: value})} placeholder="Address*" />
          <Text style={styles.address2}>+ Street Address 2 (Optinal)</Text>
          <View style={{marginTop: 10}}>
            <Dropdown
             data={cities} 
             color="#868E96" 
             width={width*0.93} 
             height={height*0.06} 
             onChangeText={(value) => dispatch({type: "SET_CITY", payload: value})}
             />
          </View>
          <View style={{marginTop: 10}}>
            <Dropdown 
              data={countries}
              color="#868E96"
              width={width*0.93} 
              height={height*0.06} 
              onChangeText={(value) => dispatch({type: "SET_COUNTRY", payload: value})}
              />
          </View>
          <AddressPartTitle
            order={3}
            title={"Billing Information"}
          />
          <Text style={styles.billingTitleText}>*Billing Address</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox 
            value={state.billingAddress}
            onValueChange={(value) => dispatch({type: "SET_BILLING_ADDRESS", payload: value})}
            disabled={false} />
            <Text style={styles.checkboxText}>Same as delivery address.</Text>
          </View>
          <Text style={styles.billingTitleText}>*Billing Type</Text>
          <View style={styles.radioContainer}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => {dispatch({type: "SET_BILLING_TYPE", payload: value})}}
              formHorizontal={true}
              labelHorizontal={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={styles.cancelButton}>
                <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>
            { 
              userCanSave ?
              <TouchableWithoutFeedback onPress={goBack}>
              <View style={styles.saveButton}>
                <Text style={styles.saveButtonTextStyle}>Save</Text>
              </View>
            </TouchableWithoutFeedback>
            : 
              <View style={[styles.saveButton, {backgroundColor: "rgba(52, 152, 219, 0.37)"}]}>
                <Text style={styles.saveButtonTextStyle}>Save</Text>
              </View>
            }
            
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    height: height
  },
  infoLabel: {
    fontSize: 11,
    color: '#868E96',
    marginTop: 10
  },
  address2: {
    fontSize: 14,
    color: '#3498DB',
    marginTop: 10
  },
  billingTitleText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginTop: 10
  },
  checkboxText: {
    marginLeft: 20,
    fontSize: 14
  },
  checkboxContainer: {
    flexDirection: 'row', 
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 3
  },
  radioContainer: {
    flexDirection: 'row', 
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 3,
    justifyContent: 'space-between',
    width: width*0.8,
  },
  radioPartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: width*0.93,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  cancelButton: {
    backgroundColor: 'white',
    borderColor: '#3498DB',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: width*0.45,
    height: height*0.07
  },
  saveButton: {
    backgroundColor: '#3498DB',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: width*0.45,
    height: height*0.07
  },
  cancelButtonTextStyle: {
    color: '#3498DB',
    fontWeight: 'bold',
    fontSize: 17
  },
  saveButtonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
})
