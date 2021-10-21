import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './redux/reducers/configureStore';
import {Provider} from 'react-redux';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import AddAddress from './screens/AddAddress';
import Detail from './screens/Detail';
import Icon from 'react-native-vector-icons/Entypo';
import {Linking} from 'react-native'
Icon.loadFont();

const store = configureStore();
const Stack = createStackNavigator();
const config = {
  screens: {
    Cart: {
      path: 'Cart',
    },
    Detail: {
      path: 'Detail/:id',
      parse: {
        id: (id) => `${id}`,
      },
    }
  },
};
 
const linking = {
  prefixes: ["https://heyvey.com"],
  config
};

function App() {

  return (
      <Provider store={store}>
        <NavigationContainer linking={linking}>
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
            <Stack.Screen
              name="Detail"
              component={Detail}
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