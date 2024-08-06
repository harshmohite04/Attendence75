import {
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import BackBlack from '../compo/backBlack';
  import BackWhite from '../compo/backWhite';
  
  const SubCnLab = ({navigation, route}) => {
    const {text} = route.params;
  
    const isDark = useColorScheme() == 'dark';
    const backgroundColor = isDark ? '#252525' : '#d6d6d6';
    const uppperBarBackgroundColor = isDark ? '#000000' : '#FFFFFF';
    const color = isDark ? '#FFFFFF' : '#000000';
  
    const [present, setPresent] = useState(10);
    const [absent, setAbsent] = useState(0);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://innov8ture.pythonanywhere.com/api/attendance?srn=${text}&subject=CN_LAB`);
          const data = await response.json();
          console.log(data.attendance_data.present);
          if (response.ok) {
            setPresent(data.attendance_data.present);
            setAbsent(data.attendance_data.absent);
            setTotal(data.attendance_data.total);
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [text]);
  
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
          <View style={styles.table}>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {color: color}]}>Present</Text>
              </View>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {color: color}]}>Absent</Text>
              </View>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {color: color}]}>Total</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {color: color}]}>{present}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {color: color}]}>{absent}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {color: color}]}>{total}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default SubCnLab;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
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
    body: {
      flex: 11,
      alignItems: 'center',
      justifyContent: 'center',
    },
    table: {
      width: '90%',
      borderWidth: 1,
      borderColor: '#000',
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    cellText: {
      fontSize: 16,
    },
  });
  