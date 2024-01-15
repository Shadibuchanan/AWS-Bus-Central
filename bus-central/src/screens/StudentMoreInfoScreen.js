import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { useEffect, useState } from 'react';
import schools from '../../assets/schools/schools.json';
import Header from '../components/Header';
import Card from '../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
//

const StudentMoreInfoScreen = () => {
  const isFocused = useIsFocused();

  const [school, setSchool] = useState('');
  const [primaryColor, setPrimaryColor] = useState('')
 const [secondaryColor, setSecondaryColor] = useState('')
 const [image, setImage] = useState(undefined)

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setSchool(user.School);
          setPrimaryColor(user.PrimaryColor);
          setSecondaryColor(user.SecondaryColor);
          setImage(user.Image);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Header name={school} backgroundColor = {primaryColor} color = {secondaryColor} image = {image}/>
      <ScrollView style={styles.container}>
        <Text style={styles.greeting}> Announcements</Text>
        <Card schools={schools} backgroundColor = {secondaryColor}>
        <Text style={styles.announcements}> fatsooo fatso fatso fatso fatso</Text>
        </Card>
        <Text style={styles.greeting}> Bus Changes</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

   greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20,
  },

  announcements: {
    fontSize: 16,
    padding: 20,
  }

  
});

export default StudentMoreInfoScreen;
