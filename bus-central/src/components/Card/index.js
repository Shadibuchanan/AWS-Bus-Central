import {
  View,
  StyleSheet,
} from 'react-native';


const Card = ({ backgroundColor, children, justifyContent }) => {
  

  
  return(
    <View style={[styles.container, { backgroundColor }, {justifyContent}]}>
     {children}
    </View>
  )
};

const styles = StyleSheet.create({
 container: {
   marginHorizontal: 20,
   height: 250,
   borderRadius: 30,
   shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
 }
});

export default Card;