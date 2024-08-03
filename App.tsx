import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Page/Home';
import Splash from './components/Page/Splash';
import ViewDetails from './components/Page/ViewDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ViewDetails" component={ViewDetails} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})