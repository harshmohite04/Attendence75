import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  useColorScheme,
  View,
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
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View
        style={[styles.uppperBar, {backgroundColor: uppperBarBackgroundColor}]}>
        <Text style={[styles.txt, {color: '#ffffff'}]}>ATTENDENCE TY F</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {name, rollNo, text, subject: 'SP'})}>
          <Text style={[styles.txtL, {color: color}]}>System Programming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {name, rollNo, text, subject: 'CN'})}>
          <Text style={[styles.txtL, {color: color}]}>Computer Networks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Subject', {name, rollNo, text, subject: 'DWDM'})
          }>
          <Text style={[styles.txtL, {color: color}]}>
            Data WareHouse & Data Mining
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Subject', {name, rollNo, text, subject: 'DAA'})
          }>
          <Text style={[styles.txtL, {color: color}]}>
            Design Analysis of Algorithm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {name, rollNo, text, subject: 'OS'})}>
          <Text style={[styles.txtL, {color: color}]}>Operating System</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Subject', {name, rollNo, text, subject: 'SP_LAB'})
          }>
          <Text style={[styles.txtL, {color: color}]}>
            System Programming Lab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Subject', {name, rollNo, text, subject: 'CN_LAB'})
          }>
          <Text style={[styles.txtL, {color: color}]}>
            Computer Networks Lab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Subject', {name, rollNo, text, subject: 'DWDM_LAB'})
          }>
          <Text style={[styles.txtL, {color: color}]}>
            Data WareHouse & Data Mining Lab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Subject', {name, rollNo, text, subject: 'OS_LAB'})
          }>
          <Text style={[styles.txtL, {color: color}]}>
            Operating System Lab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {name, rollNo, text, subject: 'PM'})}>
          <Text style={[styles.txtL, {color: color}]}>Project Management</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txtL: {
    fontSize: 20 * scale,
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
});
