import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Page/Home';
import Splash from './components/Page/Splash';
import ViewDetails from './components/Page/ViewDetails';
import SubSp from './components/Page/SubSp';
import SubSpLab from './components/Page/SubSpLab';
import SubCn from './components/Page/SubCn';
import SubCnLab from './components/Page/SubCnLab';
import SubDwdm from './components/Page/SubDwdm';
import SubDwdmLab from './components/Page/SubDwdmLab';
import SubOs from './components/Page/SubOs';
import SubOsLab from './components/Page/SubOsLab';
import SubPm from './components/Page/SubPm';
import SubDaa from './components/Page/SubDaa';

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
      <Stack.Screen name="SubSP" component={SubSp}/>
      <Stack.Screen name="SubSpLab" component={SubSpLab}/>
      <Stack.Screen name="SubCn" component={SubCn}/>
      <Stack.Screen name="SubCnLab" component={SubCnLab}/>
      <Stack.Screen name="SubDwdm" component={SubDwdm}/>
      <Stack.Screen name="SubDwdmLab" component={SubDwdmLab}/>
      <Stack.Screen name="SubOs" component={SubOs}/>
      <Stack.Screen name="SubOsLab" component={SubOsLab}/>
      <Stack.Screen name="SubPm" component={SubPm}/>
      <Stack.Screen name="SubDaa" component={SubDaa}/>
    </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})