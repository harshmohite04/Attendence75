import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const {width} = Dimensions.get('window');
const scale = width / 320;

const Subject = ({route}) => {
  const {name, rollNo, text, subject} = route.params;

  const backgroundColor = '#ffffff';
  const uppperBarBackgroundColor = '#000000';
  const color = '#000000';

  const [present, setPresent] = useState(10);
  const [absent, setAbsent] = useState(0);
  const [total, setTotal] = useState(0);
  const [subPercentage, setSubPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://innov8ture.pythonanywhere.com/api/attendance?srn=${text}&subject=${subject}`,
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setPresent(data.attendance_data.present);
          setAbsent(data.attendance_data.absent);
          setTotal(data.attendance_data.total);
          setSubPercentage(data.attendance_data.percentage);
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
        <Text style={[styles.txt, {color: '#ffffff'}]}>ATTENDENCE</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.detailBar}>
          <Text style={styles.txt2}>Name: {name}</Text>
          <Text style={styles.txt2}>SRN: {text}</Text>
          <Text style={styles.txt2}>Roll No: {rollNo}</Text>
        </View>
        <AnimatedCircularProgress
          size={200 * scale}
          width={10 * scale}
          fill={subPercentage}
          tintColor={subPercentage >= 75 ? 'green' : 'red'}
          backgroundColor="#3d5875"
          style={styles.progressIndictor}
          rotation={0}>
          {fill => (
            <View style={styles.centerContent}>
              <Text style={styles.innerPer}>{`${subPercentage}%`}</Text>
            </View>
          )}
        </AnimatedCircularProgress>

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
    borderBottomLeftRadius: 50 * scale,
    borderBottomRightRadius: 50 * scale,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 25 * scale,
    fontWeight: 'bold',
    paddingVertical:25*scale
  },
  body: {
    flex: 11,
    alignItems: 'center',
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
    borderWidth: 1 * scale,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10 * scale,
  },
  cellText: {
    fontSize: 20 * scale,
  },
  btn: {
    marginTop: 10 * scale,
    padding: 10 * scale,
    backgroundColor: '#000000',
    borderRadius: 10 * scale,
  },
  detailBar: {
    backgroundColor: '#000000',
    padding: 10 * scale,
    margin: 10 * scale,
    borderRadius: 10 * scale,
    marginTop: 30 * scale,
  },
  txt2: {
    color: '#ffffff',
    fontSize: 15 * scale,
  },
  progressIndictor: {
    alignItems: 'center',
    marginVertical: 25 * scale,
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
});
