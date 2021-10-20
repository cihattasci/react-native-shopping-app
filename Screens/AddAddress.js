import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import AddressPartTitle from '../Components/AddressPartTitle';
import AddressBigInput from '../Components/AddressBigInput';
import AddressSmallInput from '../Components/AddressSmallInput';
import Dropdown from '../Components/Dropdown';
import CheckBox from '@react-native-community/checkbox';
import RadioForm from 'react-native-simple-radio-button';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const cities = ["Adana", "İstanbul", "Kocaeli", "Trabzon"]
const countries = ["ABD", "Almanya", "İsveç", " Türkiye"]
const radio_props = [
  { value: 0 },
];

export default function AddAddress(props) {
    const navigation = useNavigation();
    return (
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.infoLabel}>*Required Fields</Text>
          <AddressPartTitle
            order={1}
            title={"Recipents Information"}
          />
          <View style={{alignItems: "center"}}>
            <AddressBigInput placeholder="Name and Surname*" />
            <View style={{flexDirection: "row", justifyContent:"space-between", width: width*0.94}}>
              <AddressSmallInput placeholder="+90" width={width*0.2} />
              <AddressSmallInput placeholder="Phone Number*" width={width*0.72} />
            </View>
          </View>
          <Text style={styles.infoLabel}>For shipping related questions only.</Text>
          <AddressBigInput placeholder="E-mail Address*" />
          <Text style={styles.infoLabel}>This address will be used to send you order and bill details.</Text>
          <AddressPartTitle
            order={2}
            title={"Shipping Address"}
          />
          <AddressBigInput placeholder="Address Title (Optinal)" />
          <Text style={styles.infoLabel}>For estimating if the place is opened or closed on the weekends.</Text>
          <AddressBigInput placeholder="Address*" />
          <Text style={styles.address2}>+ Street Address 2 (Optinal)</Text>
          <View style={{marginTop: 10}}>
            <Dropdown data={cities} color="#868E96" width={width*0.93} height={height*0.06} />
          </View>
          <View style={{marginTop: 10}}>
            <Dropdown data={countries} color="#868E96" width={width*0.93} height={height*0.06} />
          </View>
          <AddressPartTitle
            order={3}
            title={"Billing Information"}
          />
          <Text style={styles.billingTitleText}>*Billing Address</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox 
            disabled={false} />
            <Text style={styles.checkboxText}>Same as delivery address.</Text>
          </View>
          <Text style={styles.billingTitleText}>*Billing Type</Text>
          <View style={styles.radioContainer}>
            <View style={styles.radioPartContainer}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}
              />
              <Text style={styles.checkboxText}>Personel</Text>
            </View>
            <View style={styles.radioPartContainer}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}
              />
              <Text style={styles.checkboxText}>Commercial</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View style={styles.cancelButton}>
                <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.saveButton}>
                <Text style={styles.saveButtonTextStyle}>Save</Text>
              </View>
            </TouchableWithoutFeedback>
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
