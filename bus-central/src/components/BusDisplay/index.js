import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const BusDisplay = ({ busNumber, spot, isHere, borderColor}) => {
  

  return(
    <View style={[styles.container, {borderColor}]}>
    <Text style={styles.number}>{spot}</Text> 
     <Text style = {styles.bus}> {busNumber}</Text>       
      {isHere ? <Text style = {styles.here}> Here </Text>: <Text style = {styles.here}> Away </Text>}
    </View>
  )
};

const styles = StyleSheet.create({
 container: {
   width: '100%',
   height: 45,
    alignItems: 'center',
    flexDirection: 'row',
     borderBottomWidth: StyleSheet.hairlineWidth,
 },

 bus: {
   fontSize: 18,
   flex: 10,
 },

 number: {
  fontSize: 18,
  fontWeight: 'bold',
   paddingLeft: 20,
   flex: 2
 },

 here: {
  fontSize: 14,
  color: '#333333',
  paddingRight: 20,
  
 },

});

export default BusDisplay;