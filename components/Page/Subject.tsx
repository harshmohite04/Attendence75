import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  
  const {width} =Dimensions.get('window')
  const scale = width/320;

  const Subject = ({route}) => {
    const {text} = route.params;
    const {subject} = route.params
  


    const backgroundColor = '#ffffff';
    const uppperBarBackgroundColor = '#000000'
    const color = '#000000'
  
    const [present, setPresent] = useState(10);
    const [absent, setAbsent] = useState(0);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://innov8ture.pythonanywhere.com/api/attendance?srn=${text}&subject=${subject}`);
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
          <Text style={[styles.txt, {color: '#ffffff'}]}>ATTENDENCE TY F</Text>
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
  
  export default Subject;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    uppperBar: {
      flex: 1,
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderBottomLeftRadius: 50*scale,
      borderBottomRightRadius: 50*scale,
      flexDirection: 'row',
    },
    txt: {
      fontSize: 25*scale,
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
      borderColor: '#000000',
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      flex: 1,
      borderWidth: 1*scale,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10*scale,
    },
    cellText: {
      fontSize: 20*scale,
    },
    btn:{
      marginTop:10*scale,
      padding:10*scale,
      backgroundColor:'#000000',
      borderRadius:10*scale
    }
  });
  