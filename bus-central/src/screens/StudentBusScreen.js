import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import BusDisplay from '../components/BusDisplay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

import {API, graphqlOperation} from 'aws-amplify'
import {busesBySchoolID} from '../graphql/queries'


const StudentBusScreen = () => {
  const isFocused = useIsFocused();

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [bus, setBus] = useState('');
  const [primaryColor, setPrimaryColor] = useState('')
 const [secondaryColor, setSecondaryColor] = useState('')
 const [image, setImage] = useState(undefined)
 const [busImage, setBusImage] = useState(undefined)
 const [id, setID] = useState("fatso")
 const[isLoading, setIsLoading] = useState(false)
 const [isBusesLoaded, setIsBusesLoaded] = useState(false);
 const [isReady, setIsReady] = useState(false);
//creating a list for the buses from API
 const [buses, setBuses] = useState([]) 

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
}, [isFocused, id, bus, isBusesLoaded]);



const findBus = (buses, bus) => {
  const foundBus = buses.find((item) => item.bus === bus);
  console.log(foundBus)
  if (foundBus !== undefined) {
   if (foundBus.isHere) {
      return "at spot " + foundBus.spot;
    } else {
      return "not here yet";
    }
  } else {
    return "not a registered bus";
  }
};

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
          setBus(user.Bus);
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
      <Header name = {school} backgroundColor = {primaryColor} color = {secondaryColor} image = {image} />
      <ScrollView style={styles.container}>
        <Text style={styles.greeting}> Hi {name}</Text>
        {isLoading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading buses...</Text>
      </View>
    ) : (
      <View>
          <Card backgroundColor = {secondaryColor} justifyContent="center">
          <Image
            style={styles.card}
            source={{uri: busImage}}
            resizeMode="contain"
          />
        </Card>
        <Text style={styles.subtitle}>
          {' '}
          Your bus <Text style={{ fontWeight: 'bold' }}>{bus}</Text> is
          <Text style={{ fontWeight: 'bold' }}>{" "+ findBus(buses,bus)}</Text>{' '}
        </Text>
        <View style={[styles.bar, {backgroundColor: primaryColor} ]}></View>
        <Text style={styles.busTitle}>
          {' '}
          Buses {'   '}<Text style={styles.updateText}>Last Updated: </Text>
        </Text>
      <View style={styles.busesContainer}>
      {buses.map((item, index) => (
   <BusDisplay
     key={index}
     borderColor={primaryColor}
     busNumber={item.bus}
     spot={item.spot}
     isHere={item.isHere}
   />
 ))}
       </View>
       </View>
    )}
      </ScrollView>
    </View>
  ) : null;
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

  card: {
    width: null,
    height: '100%',
    margin: 15,
  },

  subtitle: {
    fontSize: 20,
    marginTop: 25,
    paddingBottom: 20,
    marginHorizontal: 20,
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
  }
});

export default StudentBusScreen;
