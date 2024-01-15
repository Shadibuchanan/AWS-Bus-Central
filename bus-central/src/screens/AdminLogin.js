import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import LoginButton from '../components/Button';
import CustomInput from '../components/Input';
import CustomDropdown from '../components/Select';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API, graphqlOperation} from 'aws-amplify'
import {listSchools} from '../graphql/queries'

const AdminLogin = (props) => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [password, setPassword] = useState('');
 const [warning, setWarning] = useState('Enter Your Information')
 const [schools, setSchools] = useState([]) 

 useEffect(()=> {
  API.graphql(graphqlOperation(listSchools)).then((result) => {
  console.log(result);
  setSchools(Array.from(result.data?.listSchools?.items));
  })
    }, [])

  const setData = async () => {
    if (name.length == 0 || school.length == 0) {
      setWarning('Warning! Please enter all your data.');
    } else {
      try {
        var user = {
          Name: name,
          School: schools[school-1].name,
          Admin: true,
          PrimaryColor: schools[school-1].primaryColor, 
          SecondaryColor: schools[school-1].secondaryColor, 
          Image: schools[school-1].image,
          BusImage:schools[school-1].busImage,
          ID: schools[school-1].id,
        };
        if(schools[school-1].password === password){
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        props.navigation.navigate('AdminHome');}
        else {setWarning('Incorrect Password! Try again.')}
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.titles}>
        <Text style={styles.title}> Administrator </Text>
        <Text style={styles.subtitle}> Welcome to Bus Central </Text>
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.inputstitle}> {warning} </Text>
        <CustomInput placeholder="Name..." value={name} setValue={setName} />
        <CustomDropdown schools={schools} value={school} setValue={setSchool} />
        <CustomInput
          placeholder="Password..."
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <LoginButton
          content="Let's Go"
          bgColor="#00ab41"
          textColor="white"
          onPress={() => setData()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },

  titles: {
    marginTop: '20%',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 20,
  },

  inputsContainer: {
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 15,
    flex: 4,
  },

  inputstitle: {
    paddingBottom: 5,
  },

  buttonsContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
});

export default AdminLogin;
