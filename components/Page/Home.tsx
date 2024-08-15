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
const {width} = Dimensions.get('window');
const scale = width / 320;

const Home = ({navigation}) => {
  const backgroundColor =  '#ffffff';
  const uppperBarBackgroundColor = '#000000';
  const color =  '#ffffff';
  const placeholderColor = '#ffffff';

  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async () => {
    setLoading(true); 
    

    try {
      const response = await fetch(
        `https://innov8ture.pythonanywhere.com/api/student?srn=${text}`,
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const percentage= data.student_data.TOTAL_PERC
        const name =data.student_data.Name
        const rollNo =data.student_data.Roll_no
        navigation.navigate('Check',{percentage,name,rollNo,text})

      } else {
        console.error(data.error); 
      }
    } catch (error) {
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
  },
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 25 * scale,
    fontWeight: 'bold',
  },
  srn: {
    marginTop: 100*scale,
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
  percent: {
    flex: 2,
  },
  perTxt: {
    fontSize: 150 * scale,
  },
});
