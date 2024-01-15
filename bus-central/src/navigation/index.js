import LoginScreen from '../screens/LoginScreen';
import StudentLogin from '../screens/StudentLogin';
import AdminLogin from '../screens/AdminLogin';
import MainTabNavigator from './MainNavigator';
import AdminNavigator from './AdminNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        console.log(value);
        if (value !== null) {
          const user = JSON.parse(value);
          setIsLoggedIn(true);
          setIsAdmin(user.Admin);
        }
        setIsReady(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return isReady ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isLoggedIn ? (isAdmin ? 'AdminHome' : 'Home') : 'Login'}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen
          name="Home"
          options={{
            gestureEnabled: false,
          }}>
          {() => <MainTabNavigator/>}
        </Stack.Screen>
        <Stack.Screen
          name="AdminHome"
          options={{
            gestureEnabled: false,
          }}>
          {() => <AdminNavigator/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  ) : null;
};

export default Navigator;
