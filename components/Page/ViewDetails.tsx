import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  useColorScheme,
  View,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
const {width} = Dimensions.get('window');
const scale = width / 320;

const ViewDetails = ({navigation, route}) => {
  const {name, rollNo, text} = route.params;
  const backgroundColor = '#ffffff';
  const uppperBarBackgroundColor = '#000000';
  const color = '#000000';

  return (
      <ScrollView>
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View
        style={[styles.uppperBar, {backgroundColor: uppperBarBackgroundColor}]}>
        <Text style={[styles.txt, {color: '#ffffff'}]}>ATTENDENCE</Text>
      </View>
        
      <View style={styles.body}>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate('Subject', {name, rollNo, text, subject: 'SP'})}>
          <Text style={[styles.txtL, {color: color}]}>System Programming</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate('Subject', {name, rollNo, text, subject: 'CN'})}>
          <Text style={[styles.txtL, {color: color}]}>Computer Networks</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() =>
          navigation.navigate('Subject', {name, rollNo, text, subject: 'DWDM'})
        }>
          <Text style={[styles.txtL, {color: color}]}>
            Data WareHouse & Data Mining
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() =>
          navigation.navigate('Subject', {name, rollNo, text, subject: 'DAA'})
        }>
          <Text style={[styles.txtL, {color: color}]}>
            Design Analysis of Algorithm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate('Subject', {name, rollNo, text, subject: 'OS'})}>
          <Text style={[styles.txtL, {color: color}]}>Operating System</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() =>
          navigation.navigate('Subject', {name, rollNo, text, subject: 'SP_LAB'})
        }>
          <Text style={[styles.txtL, {color: color}]}>
            System Programming Lab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() =>
          navigation.navigate('Subject', {name, rollNo, text, subject: 'CN_LAB'})
        }>
          <Text style={[styles.txtL, {color: color}]}>
            Computer Networks Lab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() =>
          navigation.navigate('Subject', {name, rollNo, text, subject: 'DWDM_LAB'})
        }>
          <Text style={[styles.txtL, {color: color}]}>
            Data Warehouse & Data Mining Lab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() =>
          navigation.navigate('Subject', {name, rollNo, text, subject: 'OS_LAB'})
        }>
          <Text style={[styles.txtL, {color: color}]}>
            Operating System Lab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate('Subject', {name, rollNo, text, subject: 'PM'})}>
          <Text style={[styles.txtL, {color: color}]}>Project Management</Text>
        </TouchableOpacity>
      </View>
    </View>
</ScrollView>
  );
};

export default ViewDetails;

const styles = StyleSheet.create({
  uppperBar: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomLeftRadius: 50 * scale,
    borderBottomRightRadius: 50 * scale,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 25 * scale,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  body: {
    flex: 11,
    marginVertical: 25 * scale,
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
  txtL: {
    fontSize: 20 * scale,
    borderColor: '#000000',

  },
  btn2:{
    marginVertical:10*scale,
    backgroundColor:'#d9d9d9',
    padding:8*scale,
    borderRadius:10*scale,
    marginHorizontal:10*scale
  }
});
