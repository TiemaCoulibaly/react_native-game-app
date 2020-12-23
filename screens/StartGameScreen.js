import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constant/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputValue = inputValue => {
    //regular expression by replacing anything that is not from 0 to 9
    //(g)=globally and replace it by empty string
    setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
  }
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmedInputHandler = () => {
    //convert into string
    const chosenNumber = parseInt(enteredValue);
    //check if the number entered is not a number or its smaller or equal 0 or greater than 99 to just return the function 
    if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
      Alert.alert(
        'Invalid Number !!',
        'Number has to be between 0 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
    setConfirmed(true);
    Keyboard.dismiss();
  }

let confirmedOutput;

if(confirmed){
  confirmedOutput = 
  <Card style={styles.summaryContainer}>
      <Text>You selected number:</Text>
    <NumberContainer>{selectedNumber}</NumberContainer>
    <Button title='START GAME' color={Colors.primary} onPress={() => props.onStartGame(selectedNumber)}/>
  </Card>
}


  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
    <View style={styles.container}>
      <Text style={styles.title}>Start The Game !!</Text>
         <Card style={styles.inputContainer}>
           <Text>Select a Number</Text>
           <Input style={styles.input} 
           blurOnSubmit 
           autoCapilize='none' 
           autoCorrect={false} 
           keyboardType='number-pad' 
           maxLength={2}
           onChangeText={numberInputValue}
           value={enteredValue}

           />
          <View style={styles.buttonContainer}>
              <View style={styles.button}>
              <Button color={Colors.primary} title='Confirm' onPress={confirmedInputHandler}/>
              </View>
              <View style={styles.button}>
              <Button color={Colors.secondary} title='Reset' onPress={resetInputHandler}/>
              </View>     
           </View>
        </Card>
        {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  title:{
    fontSize: 16,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%'
  }, 
  button: {
    width: 100,
    padding: 7
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 30,
    alignItems: 'center'

  }
})
export default StartGameScreen;