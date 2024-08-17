import {Dimensions, StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const {width} = Dimensions.get('window');
const scale = width / 320;

const Check = ({navigation, route}) => {
  const {percentage,name, rollNo, text} = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.uppperBar]}>
        <Text style={[styles.txt]}>ATTENDANCE</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.detailBar}>
          <View style={styles.row}>
          <Text style={styles.txt2}>Name: </Text>
          <Text style={styles.txt3}>{name}</Text>
          </View>

          <View style={styles.row}>

          <Text style={styles.txt2}>SRN: </Text>
          <Text style={styles.txt3}>{text}</Text>
          </View>
          <View style={styles.row}>

          <Text style={styles.txt2}>Roll No: </Text>
          <Text style={styles.txt3}>{rollNo}</Text>
          </View>
        </View>

        <AnimatedCircularProgress
          size={200 * scale}
          width={10 * scale}
          fill={percentage}
          tintColor={percentage>=75?'green':'red'}
          backgroundColor="#3d5875"
          style={styles.progressIndictor}
          rotation={0}>
          {fill => (
            <View style={styles.centerContent}>
              <Text style={styles.innerPer}>{`${percentage}%`}</Text>
            </View>
          )}
        </AnimatedCircularProgress>

        <TouchableOpacity
              style={[styles.Btn, {width: '35%'}]}
              onPress={()=>{
                navigation.navigate('ViewDetails',{name, rollNo, text})
              }}>
              <Text style={styles.text}>
                View Details
              </Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default Check;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
      flex: 11,
      alignItems: 'center',
    },
    uppperBar: {
      flex: 1,
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderBottomLeftRadius: 50 * scale,
      borderBottomRightRadius: 50 * scale,
      flexDirection: 'row',
      backgroundColor: '#000000',
    },
    txt: {
      fontSize: 25 * scale,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    detailBar: {
      backgroundColor: '#000000',
      padding: 10 * scale,
      margin: 10 * scale,
      borderRadius: 10 * scale,
      marginTop:30*scale
    },
    
    innerPer: {
      fontSize: 70 * scale,
      color: '#000000',
      textAlign: 'center',
    },
    centerContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressIndictor: {
      alignItems: 'center',
      marginVertical:25*scale
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
      row:{
        flexDirection:'row'
      },
      txt2: {
        color: '#ffffff',
        fontSize: 15 * scale,
        fontWeight:'700'
      },
      txt3: {
        color: '#ffffff',
        fontSize: 15 * scale,
        
      },
  });
  