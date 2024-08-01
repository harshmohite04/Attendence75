import {
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import BackWhite from '../compo/backWhite';
import BackBlack from '../compo/backBlack';

const ViewDetails = ({navigation}) => {
  const isDark = useColorScheme() == 'dark';
  const backgroundColor = isDark ? '#252525' : '#d6d6d6';
  const uppperBarBackgroundColor = isDark ? '#000000' : '#FFFFFF';
  const color = isDark ? '#FFFFFF' : '#000000';
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View
        style={[styles.uppperBar, {backgroundColor: uppperBarBackgroundColor}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {isDark ? <BackWhite /> : <BackBlack />}
        </TouchableOpacity>
        <Text style={[styles.txt, {color: color}]}>ATTENDENCE TY F</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>System Programming</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Computer Networks</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Data WareHouse & Data Mining</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Design Analysis of Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Operating System</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>System Programming Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Computer Networks Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Data WareHouse & Data Mining Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Design Analysis of Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Operating System Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>console.log("Clicked")}>
          <Text style={styles.txtL}>Project Management</Text>
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
    fontSize: 35,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  body: {
    flex: 11,
    marginVertical:25,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  txtL:{
    fontSize:25
  }
});
