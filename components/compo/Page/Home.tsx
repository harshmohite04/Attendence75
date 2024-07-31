import {StyleSheet, Text,TouchableOpacity,useColorScheme, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const isDark = useColorScheme() == 'dark';
  const backgroundColor = isDark ? '#252525' : '#d6d6d6';
  const uppperBarBackgroundColor = isDark ? '#000000' : '#FFFFFF';
  const color = isDark ? '#FFFFFF' : '#000000';
  const placeholderColor = isDark ? '#FFFFFF' : '#000000';

  const [text, setText] = useState('');
  return (
    <>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View
          style={[
            styles.uppperBar,
            {backgroundColor: uppperBarBackgroundColor},
          ]}>
          <Text style={[styles.txt, {color: color}]}>ATTENDENCE TY F</Text>
        </View>
        <View style={[styles.body]}>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Enter your SR No."
            keyboardType="numeric"
            placeholderTextColor={placeholderColor}
            style={[
              styles.srn,
              {backgroundColor: uppperBarBackgroundColor, color: color},
            ]}
          />
          <View style={styles.Btn}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('ViewDetails')}>
            <Text style={styles.text}>Check</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  uppperBar: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  body: {
    flex: 11,
    // justifyContent:'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  srn: {
    marginTop: 100,
    borderWidth: 1,
    borderRadius: 10,
    width: '50%',
    paddingLeft: 10,
  },
  Btn: {
    margin: 20,
    height: 40,
    width: '25%',
    backgroundColor: '#4b81f4',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    color: '#000000',
    fontSize:20
  },
});
