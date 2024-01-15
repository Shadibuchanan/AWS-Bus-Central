import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentBusScreen from '../screens/StudentBusScreen';
import StudentMoreInfoScreen from '../screens/StudentMoreInfoScreen';
import Settings from '../screens/Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
const [tabColor, setTabColor] = useState('')
 const [tintColor, setTintColor] = useState('')

const navigation = useNavigation();
  const isFocused = useIsFocused(); // use useIsFocused hook

  useEffect(() => {
    if (isFocused) {
      getData();
      navigation.navigate('Buses'); // navigate to Buses screen if MainTabNavigator is focused
    }
  }, [isFocused, navigation]);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setTabColor(user.PrimaryColor);
          setTintColor(user.SecondaryColor);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Buses"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tabColor,
          borderTopWidth: 1,
          borderTopColor: tintColor,
          opacity: 0.9,
        },
      }}>
      <Tab.Screen
        name="Buses"
        component={StudentBusScreen}
        options={{
         tabBarActiveTintColor: tintColor,
          tabBarInactiveTintColor: '#5A5A5A',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bus-school"
              size={size}
              color={color}
            />
          ),
        }
        }
      />
      <Tab.Screen
        name="Announcements"
        component={StudentMoreInfoScreen}
        options={{
          tabBarActiveTintColor: tintColor,
          tabBarInactiveTintColor: '#5A5A5A',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="megaphone" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Settings} options={{
        tabBarActiveTintColor: tintColor,
          tabBarInactiveTintColor: '#5A5A5A',
          tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons
              name="account-settings"
              size={size}
              color={color}
            />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
