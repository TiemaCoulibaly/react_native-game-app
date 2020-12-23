import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Colors from '../constant/colors';

const Input = props => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}/>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 20,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
   marginVertical: 20
  }
});

export default Input;