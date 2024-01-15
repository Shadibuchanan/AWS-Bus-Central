import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from 'react-native';

const Header = ({name, backgroundColor, image, color}) => {

  return (
    <View style={styles.fixedHeaderContainer}>
      <View style={[styles.headerContainer, { backgroundColor }]}>
        <StatusBar barStyle="light-content" />
        <Image style={styles.headerImage} source={{ uri: image }} />
        <Text
          style={[styles.headerText, { color }]}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedHeaderContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },

  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },

  headerImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: 5,
  },

  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1
  },
});

export default Header;
