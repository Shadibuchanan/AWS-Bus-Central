import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import Header from '../components/Header';
import Listitem from '../components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

const Settings = (props) => {

  const isFocused = useIsFocused();

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [bus, setBus] = useState('');
  const [primaryColor, setPrimaryColor] = useState('')
 const [secondaryColor, setSecondaryColor] = useState('')
 const [image, setImage] = useState(undefined)
  const [nameChanged, setNameChanged] = useState(false);
  const [busChanged, setBusChanged] = useState(false);

  useEffect(() => {
    if (isFocused) {
      getData();
      setNameChanged(false)
      setBusChanged(false)
    }
  }, [isFocused]);


  const getData = () => {
    try {
      AsyncStorage.getItem('UserData')
        .then(value => {
          if (value != null) {
            let user = JSON.parse(value);
            setName(user.Name);
            setBus(user.Bus);
          setSchool(user.School);
          setPrimaryColor(user.PrimaryColor);
          setSecondaryColor(user.SecondaryColor);
          setImage(user.Image);
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  const updateName = async () => {
    if (name.length == 0) {
      console.log('Warning!', 'Please write your name.')
    } else {
      try {
        var user = {
          Name: name
        }
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        setNameChanged(false);
      } catch (error) {
        console.log(error);
      }
    }
  }

   const updateBus = async () => {
    if (bus.length == 0) {
      console.log('Warning!', 'Please write your bus.')
    } else {
      try {
        var user = {
          Bus: bus
        }
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        setBusChanged(false);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      props.navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Header name={school} backgroundColor = {primaryColor} color = {secondaryColor} image = {image}/>
      <ScrollView style={styles.container}>
        <Listitem content="Change Name">
          <TextInput
            style={styles.input}
            placeholder={name}
            placeholderTextColor="#d3d3d3"
            value={name}
            onChangeText={(value) => {
              setName(value);
              setNameChanged(true);
            }}>
          </TextInput>
          {nameChanged && (
            <TouchableOpacity onPress={() => updateName()}>
              <AntDesign name="checkcircleo" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
          )}
        </Listitem>
       <Listitem content="Change Bus">
          <TextInput
            style={styles.input}
            placeholder={bus}
            placeholderTextColor="#d3d3d3"
            value={bus}
            onChangeText={(value) => {
              setBus(value);
              setBusChanged(true);
            }}>
          </TextInput>
          {busChanged && (
            <TouchableOpacity onPress={() => updateBus()}>
              <AntDesign name="checkcircleo" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
          )}
        </Listitem>
        <TouchableOpacity
          onPress={() => removeData()}
        >
          <Listitem backgroundColor='#999999' color = 'red' content="Log Out" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    width: '70%',
    height: '100%',
    backgroundColor: '#f5f5f5',
    borderColor: '#808080',
    borderWidth: 1,
    paddingHorizontal: 5,
    fontSize: 16
  },

  icon: {
    marginHorizontal: 10
  },

});

export default Settings;