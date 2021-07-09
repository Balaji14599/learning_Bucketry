import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreens from './screens/HomeScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './screens/CartScreen';
const App = () =>
{
  const Stack=createStackNavigator();
  const screenHead={
    headerShown:false
  }
  return(
    <NavigationContainer>
      <Stack.Navigator  screenOptions={screenHead}>
        <Stack.Screen  name="Home" component={HomeScreens} />
        <Stack.Screen  name="cartScreen" component={CartScreen} options={{title:"cartscreen"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}


export default App;
