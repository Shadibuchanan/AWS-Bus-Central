import { View, StyleSheet, TextInput } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#000"
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 9,
    marginBottom: 10,
  },

  input: {
    paddingVertical: 11,
    paddingHorizontal: 17,
    fontSize: 12,
  },
});

export default CustomInput;
