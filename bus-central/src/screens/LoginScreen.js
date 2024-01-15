import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import LoginButton from '../components/Button';

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/loginBackground.png')}>
        <View style={styles.titles}>
          <Text style={styles.title}> Bus Central </Text>
          <Text style={styles.subtitle}> Choose Your Role </Text>
        </View>
        <View style={styles.buttonsContainer}>
        <LoginButton 
        content = "student"
        bgColor = "white"
        textColor = "black"
        activeOpacity = {0.5}
        onPress = {() => {props.navigation.navigate('StudentLogin')}}
        />
        <LoginButton 
        content = "administrator"
        bgColor = "#454545"
        textColor = "white"
        onPress = {() => {props.navigation.navigate('AdminLogin')}}
        />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  titles: {
    marginTop: '30%',
    alignItems: 'center',
    width: '100%',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%'
  }
});

export default LoginScreen;
