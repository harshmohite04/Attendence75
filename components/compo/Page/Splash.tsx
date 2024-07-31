import {
  StyleSheet,
  Text,
  useColorScheme,
  SafeAreaView,
  View,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const Splash = ({navigation}) => {
  const isDark = useColorScheme() == 'dark';
  const backgroundColor = isDark ? '#252525' : '#FFFFFF';

  setTimeout(() => {
    navigation.replace('Home');
  }, 5000);
  return (
    <SafeAreaView>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <Video
          style={styles.video}
          source={require('../../../assets/video/teacher.mp4')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
});
