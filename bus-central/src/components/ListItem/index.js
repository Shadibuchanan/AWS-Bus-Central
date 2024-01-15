import { View, Text, StyleSheet } from 'react-native';

const Listitem = ({ content, children, color, backgroundColor}) => {

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text style={[styles.text, {color}]}>{content}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', height: '60%', alignItems: 'center'}}>
       {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },


});

export default Listitem;
