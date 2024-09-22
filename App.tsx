import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import Dashboard from './screens/Dashboard';
import {View, Text, StyleSheet} from 'react-native';
import TabNavigator from './navigation/TabNavigator';
import AuthStack from './navigation/AuthStack'; // Stack for Login and OTP flow

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Login"
    //     screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="OTP" component={OTPScreen} />
    //     <Stack.Screen name="Dashboard" component={Dashboard} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <View>
    // <Dashboard />
    // </View>

    // <NavigationContainer>
    //   <TabNavigator />
    // </NavigationContainer>

    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
