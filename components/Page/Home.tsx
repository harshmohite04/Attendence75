import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const isDark = useColorScheme() == 'dark';
  const backgroundColor = isDark ? '#252525' : '#d6d6d6';
  const uppperBarBackgroundColor = isDark ? '#000000' : '#FFFFFF';
  const color = isDark ? '#FFFFFF' : '#000000';
  const placeholderColor = isDark ? '#FFFFFF' : '#000000';

  const [text, setText] = useState('');
  const [press, setPress] = useState(false);
  const [totalPerc, setTotalPerc] = useState(0);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://innov8ture.pythonanywhere.com/api/student?srn=${text}`);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setTotalPerc(data.student_data.TOTAL_PERC);
        setPress(true);
      } else {
        console.error(data.error);
        setPress(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setPress(false);
    }
  };

  return (
    <>
      <ScrollView
        style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View
          style={[
            styles.uppperBar,
            {backgroundColor: uppperBarBackgroundColor},
          ]}>
          <Text style={[styles.txt, {color: color}]}>ATTENDANCE TY F</Text>
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
          <View style={styles.mulBtn}>
            <View style={[styles.Btn, {width: '20%'}]}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.text}>Check</Text>
              </TouchableOpacity>
            </View>
            {press ? (
              <View style={[styles.Btn, {width: '35%'}]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ViewDetails',{text})}>
                  <Text style={styles.text}>View Details</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          {press ? (
            <View style={styles.percent}>
              <Text style={[styles.perTxt, {color: totalPerc >= 75 ? 'green' : 'red'}]}>
                {totalPerc}%
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
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
    backgroundColor: '#4b81f4',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
  mulBtn: {
    flex: 1,
    flexDirection: 'row',
  },
  percent: {
    flex: 2,
  },
  perTxt: {
    fontSize: 200,
  },
});
