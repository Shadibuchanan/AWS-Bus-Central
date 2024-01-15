import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import BusInput from '../components/BusInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import {API, graphqlOperation} from 'aws-amplify'
import {busesBySchoolID} from '../graphql/queries'
import { createBus, deleteBus } from '../graphql/mutations';



const AdminBusScreen = () => {
  const isFocused = useIsFocused();

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [primaryColor, setPrimaryColor] = useState('')
 const [secondaryColor, setSecondaryColor] = useState('')
 const [image, setImage] = useState(undefined)
 const [busImage, setBusImage] = useState(undefined)
 const [id, setID] = useState("fatso")
 const[isLoading, setIsLoading] = useState(false)
 const [isBusesLoaded, setIsBusesLoaded] = useState(false);
 const [isReady, setIsReady] = useState(false);
 const [reload, setReload] = useState(false)
//creating a list for the buses from API
 const [buses, setBuses] = useState([]) 

 //For adding Buses
const [newBus, setNewBus] = useState('')
const [newBusChanged, setNewBusChanged] = useState(false)
const [addedBusWarning, setAddedBusWarning] = useState("This will add a bus to your board")

const add = async () => {

  const addedBus = {
    schoolID: id, 
    bus: newBus, 
    isHere: false, 
    spot: "X"
  }

  await API.graphql(graphqlOperation(createBus, {input: addedBus}))

  setNewBusChanged(false)
  setNewBus("")
  setAddedBusWarning("Bus has been Added!")
  setReload(!reload)
}

 //For Removing Buses
 const [removedBus, setRemovedBus] = useState('')
const [removedBusChanged, setRemovedBusChanged] = useState(false)
const [removedWarning, setRemovedWarning] = useState("This will remove a bus from your board")

 const remove = async () => {

  const foundBus = buses.find((item) => item.bus === removedBus);
  if (foundBus !== undefined) {

console.log(foundBus.id)


   await API.graphql(graphqlOperation(deleteBus, {input: {id: foundBus.id, _version: foundBus._version}}))

    setRemovedWarning("Bus has been Removed!")
    setReload(!reload)
  }
  else setRemovedWarning("That Bus Does NOT exist!")

  setRemovedBusChanged(false)
  setRemovedBus("")
 }

 useEffect(() => {
  let isMounted = true;
  if (isFocused) {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await getData();
        console.log(id)
        if (isMounted && id !== "fatso") {
          const result = await API.graphql(graphqlOperation(busesBySchoolID, { schoolID: id}));

          console.log(result);
          setBuses(Array.from(result.data?.busesBySchoolID?.items).filter(item => !item._deleted).sort((a, b) => a.bus.localeCompare(b.bus)));
          setIsBusesLoaded(true);
          setIsLoading(false);
          setNewBusChanged(false)
          setNewBus("")
          setRemovedBusChanged(false)
          setRemovedBus("")
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }
  return () => {
    isMounted = false;
  };
}, [isFocused, id, isBusesLoaded, reload]);


const getData = () => {
  try {
    AsyncStorage.getItem('UserData').then((value) => {
      if (value != null) {
        let user = JSON.parse(value);
        setName(user.Name);
        setSchool(user.School);
        setPrimaryColor(user.PrimaryColor);
        setSecondaryColor(user.SecondaryColor);
        setImage(user.Image);
        setBusImage(user.BusImage);
        setID(user.ID);
      }
      setIsReady(true);
    });
  } catch (error) {
    console.log(error);
  }
};

  return isReady ? (
    <View style={styles.container}>
      <Header
        name={school}
        backgroundColor={primaryColor}
        color={secondaryColor}
        image={image}
      />
       <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.greeting}> Hi {name}</Text>
        {isLoading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading buses...</Text>
      </View>
    ) : (
        <View>
        <Card backgroundColor={secondaryColor} justifyContent="center">
          <Image
            style={styles.card}
            source={{uri: busImage}}
            resizeMode="contain"
          />
        </Card>
        <View style={[styles.bar, {backgroundColor: primaryColor} ]}></View>
        <Text style={styles.busTitle}>
          {' '}
          Edit Buses {'   '}
          <Text style={styles.updateText}>Last Updated: </Text>
        </Text>
        <View style={styles.busesContainer} >
        {buses.map((item, index) => (
   <BusInput
     key={index}
     borderColor={primaryColor}
     busNumber={item.bus}
     spot={item.spot}
     isHere={item.isHere}
     busID={item.id}
     version={item._version}
   />
 ))}
        </View>
        <View style={[styles.bar, {backgroundColor: primaryColor} ]}></View>
        <Text style={styles.busTitle}>Add Bus</Text>
        <Text style={styles.subtitle}>{addedBusWarning}</Text>
        <View style={styles.busesContainer}>
        <View style={[styles.inputsContainer, { borderColor: primaryColor }]}>
        <TextInput
        style={styles.input}
        placeholder="New Bus Number..."
        placeholderTextColor="#888888"
        value={newBus}
        onChangeText={(value) => {
          setNewBus(value);
          setNewBusChanged(true);
          setAddedBusWarning("This will add a bus to your board")
        }}
        onEndEditing={()=> {
          if(newBus==="")
          setNewBusChanged(false)
        }}
      />
        {(newBusChanged) ? (
            <TouchableOpacity style={{flex: 1.5}} onPress={() => add()}>
              <AntDesign name="checkcircleo" size={24} color="black" />
            </TouchableOpacity>
          ): (<View style={{flex: 5}}></View>)}
      </View>
      </View>
        <View style={[styles.bar, {backgroundColor: primaryColor} ]}></View>
        <Text style={styles.busTitle}>Remove Bus</Text>
        <Text style={styles.subtitle}>{removedWarning}</Text>
        <View style={styles.busesContainer}>
        <View style={[styles.inputsContainer, { borderColor: primaryColor }]}>
        <TextInput
        style={styles.input}
        placeholder="Removed Bus Number..."
        placeholderTextColor="#888888"
        value={removedBus}
        onChangeText={(value) => {
          setRemovedBus(value);
          setRemovedBusChanged(true);
          setRemovedWarning("This will remove a bus from your board")
        }}
        onEndEditing={()=> {
          if(removedBus==="")
          setRemovedBusChanged(false)
        }}
      />
        {(removedBusChanged) ? (
            <TouchableOpacity style={{flex: 1.5}} onPress={() => remove()}>
              <AntDesign name="checkcircleo" size={24} color="black" />
            </TouchableOpacity>
          ): (<View style={{flex: 5}}></View>)}
      </View>
      </View>
      </View>
    )}</ScrollView></KeyboardAvoidingView>
    </View>
  ) : null;;
};

const styles = StyleSheet.create({
  container: {
   height: '100%',
  },

  scrollContainer: {
    flex: 1,
    paddingBottom: 15,
  },

  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20,
  },

  card: {
    width: null,
    height: '100%',
    margin: 15,
  },

  busTitle: {
    fontSize: 28,
    marginHorizontal: 20,
  },

  updateText: {
    fontSize: 16,
    color: '#444444',
  },

  busesContainer: {
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: '#eeeeee',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bar: {
    height: 1 ,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },

  inputsContainer: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 10
  },

  input: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 8,
  },

  subtitle: {
    marginTop: 10,
    marginHorizontal: 20
  }
});

export default AdminBusScreen;
