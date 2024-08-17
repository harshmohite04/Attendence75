import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/img/logo';
const {width} = Dimensions.get('window');
const scale = width / 320;

const Home = ({navigation}) => {
  const backgroundColor =  '#ffffff';
  const uppperBarBackgroundColor = '#000000';
  const color =  '#ffffff';
  const placeholderColor = '#ffffff';

  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); // New state for error handling

  const handleSubmit = async () => {
    setLoading(true); 
    setError(''); // Reset the error before starting the request

    try {
      const response = await fetch(
        `https://innov8ture.pythonanywhere.com/api/student?srn=${text}`,
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const percentage= data.student_data.TOTAL_PERC;
        const name = data.student_data.Name;
        const rollNo = data.student_data.Roll_no;
        navigation.navigate('Check',{percentage,name,rollNo,text});
      } else {
        setError(data.error || 'An error occurred. Please try again.'); // Set error message
      }
    } catch (error) {
      setError('Error fetching data. Please check your connection and try again.'); // Handle network errors
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); 
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
          <Text style={[styles.txt, {color: color}]}>ATTENDANCE</Text>
        </View>
        <View style={[styles.body]}>
          <View style={styles.logo}>

        <Logo/>
          </View>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Enter your SR No."
            keyboardType="numeric"
            placeholderTextColor={placeholderColor}
            style={[
              styles.srn,
              {backgroundColor: '#383837', color: color},
            ]}
            />
          <View style={styles.mulBtn}>
            <TouchableOpacity
              style={[styles.Btn, {width: '25%'}]}
              onPress={handleSubmit}
              disabled={loading}>
              <Text style={styles.text}>
                {loading ? 'Loading...' : 'Check'}
              </Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color={color} />
          ) : null}
          {error ? ( // Display error message if it exists
            <Text style={styles.errorText}>{error}</Text>
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
    borderBottomLeftRadius: 50*scale,
    borderBottomRightRadius: 50*scale,
    paddingVertical: 10 * scale,
  },
  
  body: {
    flex: 11,
    alignItems: 'center',
    justifyContent:'center'
  },
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 25 * scale,
    fontWeight: 'bold',
  },
  srn: {
    marginTop: 30*scale,
    borderWidth: 1*scale,
    borderRadius: 10*scale,
    width: '50%',
    paddingLeft: 10*scale,
  },
  Btn: {
    margin: 20*scale,
    height: 40*scale,
    backgroundColor: '#7ae9ff',
    borderRadius: 25*scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 15 * scale,
  },
  mulBtn: {
    flex: 1,
    flexDirection: 'row',
  },
  errorText: {
    color: 'red',
    marginTop: 20*scale,
    textAlign: 'center',
    fontSize: 14*scale,
  },
  logo:{
    marginTop:70*scale,
 }
});
