import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginButton = (props) => {

const backgroundColor = props.bgColor
const color = props.textColor
const content= props.content
const onPress= props.onPress


  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {backgroundColor}]} 
      onPress={onPress}>
      <Text style={[styles.text, {color}]}> {content} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
container: {
 width: '100%',
 padding: 10,
},

text: {
  fontSize: 14,
  fontWeight: 'bold',
  textTransform: 'uppercase',
},

button: {
 backgroundColor: 'white',
 height: 50,
 justifyContent: 'center',
 alignItems: 'center',
 borderRadius: 25,
},


});

export default LoginButton;
