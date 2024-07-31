import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';


const Splash = ({navigation}) => {
  const isDark = useColorScheme()=='dark';
  const background = isDark?'#252525':'#FFFFFF';

  setTimeout(()=>{
    navigation.replace("Home")
  },10000)
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})