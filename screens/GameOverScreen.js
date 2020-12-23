import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const GameOverScreen = (props) => {
  return(
      <View style={styles.container}>
        <Text>The Game is done Cuzzy!</Text>
        <Text>The number of rounds is {props.roundNumber}</Text>
        <Text>You number was: {props.userNumber}</Text>
        <Button title='RESTART THE GAME' onPress={props.onRestart} />
      </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default GameOverScreen;