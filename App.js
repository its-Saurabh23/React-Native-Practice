import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import {Provider } from 'react-redux';
import store from './Store'
import Home from './Home';
import FoodContainer from './FoodContainer';

const Tab = createMaterialTopTabNavigator();

const App = () => (
  <Provider  store= {store}>
  
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          marginTop: 40,
          elevation: 0,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="FoodContainer" component={FoodContainer} />
    </Tab.Navigator>
  </NavigationContainer>
  
  </Provider>
);
export default App;
