import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';


const CustomDropdown = ({ schools , setValue, value}) => {


  const data = schools.map((school, index) => ({
    key: index + 1,
    value: school.name,
  }));

  
  return (
    <View style={styles.container}>
      <SelectList
        selected = {value}
        data={data}
        setSelected={setValue}
        placeholder="Select School..."
        searchPlaceholder="Search For Your School"
        notFoundText="School Not Found!"
        boxStyles = {{backgroundColor: 'white', borderWidth: 0,}}
        inputStyles = {{color: "#000000",}}
        dropdownStyles = {{backgroundColor: 'white', borderWidth: 0,}}
        dropdownTextStyles = {{borderBottomWidth: 1, borderColor: '#d3d3d3', paddingBottom: 5, color: '#000'}}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  }
});

export default CustomDropdown;
