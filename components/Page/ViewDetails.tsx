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
  const {text} = route.params;
  const isDark = useColorScheme() == 'dark';
  const backgroundColor = isDark ? '#252525' : '#d6d6d6';
  const uppperBarBackgroundColor = isDark ? '#000000' : '#FFFFFF';
  const color = isDark ? '#FFFFFF' : '#000000';
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View
        style={[styles.uppperBar, {backgroundColor: uppperBarBackgroundColor}]}>
        <Text style={[styles.txt, {color: color}]}>ATTENDENCE TY F</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.navigate('Subject', {text,subject:'SP'})}>
          <Text style={[styles.txtL,{color:color}]}>System Programming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Subject', {text,subject:'CN'})}>
          <Text style={[styles.txtL,{color:color}]}>Computer Networks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {text,subject:'DWDM'})}>
          <Text style={[styles.txtL,{color:color}]}>Data WareHouse & Data Mining</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Subject', {text,subject:'DAA'})}>
          <Text style={[styles.txtL,{color:color}]}>Design Analysis of Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Subject', {text,subject:'OS'})}>
          <Text style={[styles.txtL,{color:color}]}>Operating System</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {text,subject:'SP_LAB'})}>
          <Text style={[styles.txtL,{color:color}]}>System Programming Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {text,subject:'CN_LAB'})}>
          <Text style={[styles.txtL,{color:color}]}>Computer Networks Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {text,subject:'DWDM_LAB'})}>
          <Text style={[styles.txtL,{color:color}]}>Data WareHouse & Data Mining Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subject', {text,subject:'OS_LAB'})}>
          <Text style={[styles.txtL,{color:color}]}>Operating System Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Subject', {text,subject:'PM'})}>
          <Text style={[styles.txtL,{color:color}]}>Project Management</Text>
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
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 25*scale,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  body: {
    flex: 11,
    marginVertical: 25,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txtL: {
    fontSize: 20*scale,

  },
});
