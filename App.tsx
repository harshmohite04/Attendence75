import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Page/Home';
import Splash from './components/Page/Splash';
import ViewDetails from './components/Page/ViewDetails';
import Subject from './components/Page/Subject';
import Check from './components/Page/Check';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Check" component={Check} />
      <Stack.Screen name="ViewDetails" component={ViewDetails} />
      <Stack.Screen name="Subject" component={Subject} />
      
    </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})