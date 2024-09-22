// navigation/TabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import ActiveRide from '../screens/ActiveRide';
import MyRide from '../screens/MyRide';
import Settings from '../screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ActiveRide') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'MyRide') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={'white'} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {backgroundColor: '#199676'},
      })}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="ActiveRide" component={ActiveRide} />
      <Tab.Screen name="MyRide" component={MyRide} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
