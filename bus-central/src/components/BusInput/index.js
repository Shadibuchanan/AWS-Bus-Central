import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react'
import {API, graphqlOperation} from 'aws-amplify'
import {updateBus} from '../../graphql/mutations'

const apiKey = 'da2-gi5v5yzbyzfhfpc4zuf44bmppi';

const BusInput = ({
  busNumber,
  borderColor,
  spot,
  placeholder,
  isHere,
  busID,
  version
}) => {

const [updatedSpot, setUpdatedSpot] = useState(spot)
const [updatedHere, setUpdatedHere] = useState(isHere)
const[spotChanged, setSpotChanged] = useState(false)
const[hereChanged, setHereChanged] = useState(false)

const change = async () => {

  await API.graphql(graphqlOperation(updateBus, {input: {id: busID, isHere: updatedHere, spot: updatedSpot, _version: version}}))

 //at end
 setSpotChanged(false)
 setHereChanged(false)
}

  return (
    <View style={[styles.container, { borderColor }]}>
      <TextInput
        style={styles.number}
        placeholder={placeholder}
        placeholderTextColor="#808080"
        value={updatedSpot}
        onChangeText={(value) => {
          setUpdatedSpot(value);
          setSpotChanged(true);
        }}
        keyboardType = "number-pad"
      />
      <Text style={styles.bus}>{busNumber}</Text>
      <View style={styles.here}>
      <Text style={styles.hereText} > Is Here? </Text>
      <BouncyCheckbox
        isChecked={updatedHere}
        onPress={() => {setUpdatedHere(!updatedHere)
        setHereChanged(true)
      if(!updatedHere === false){
        setUpdatedSpot("X")
      }}}
      />
      </View>
       {(spotChanged || hereChanged) ? (
            <TouchableOpacity style={styles.icon} onPress={() => change()}>
              <AntDesign name="checkcircleo" size={24} color="black" />
            </TouchableOpacity>
          ): (<View style={{flex: 5}}></View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 10
  },

  bus: {
    fontSize: 18,
    flex: 8,
  },

  number: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    flex: 6,
  },

  here: {
    flex: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  hereText: {
    fontSize: 14,
    color: '#333333', 
    paddingRight: 7
  },

  icon: {
    flex: 5,
  },
  
});

export default BusInput;
