import {
  StyleSheet,
  Text,
  useColorScheme,
  SafeAreaView,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import Video from 'react-native-video';

const Splash = ({navigation}) => {
  const isDark = useColorScheme() == 'dark';

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container]}>
        <Video
          source={require('../../assets/video/teacher.mp4')}
          style={styles.video}
          onError={(error) => {
            console.error("Video Error:", error);
          }}
          resizeMode="cover"
          repeat
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff'
  },
  video: {
    width: 300,
    height:300,
  },
});
