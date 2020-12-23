import React from 'react';
import {View, Text, StyleSheet} from 'react-native';  
import Colors from '../constant/colors';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    shadowColor: 'black',
    elevation: 30,
  },
  headerText: {
    fontSize: 20,
  }
})

export default Header;