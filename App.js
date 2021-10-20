import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './redux/reducers/configureStore';
import {Provider} from 'react-redux';
import Cart from './Screens/Cart';
import Checkout from './Screens/Checkout';
import AddAddress from './Screens/AddAddress';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();

const store = configureStore();
const Stack = createStackNavigator();

function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ title: 'Shopping Cart' }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="AddAddress"
              component={AddAddress}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

export default App;