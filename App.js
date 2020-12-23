import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const configureNewGame = () => {
    setGuessRound(0);
    setUserNumber(null);
  }

  const startGamehandler = selectedNumber => {
    setUserNumber(selectedNumber);
    //reset the game to zéro
    
  }

  const gameOverHandler = numberOfRound => {
    setGuessRound(numberOfRound);
  }

  let content = <StartGameScreen onStartGame={startGamehandler}/>;

  if(userNumber && guessRound <= 0){
    content =  <GameScreen userChoice={userNumber} onStartGame onGameOver={gameOverHandler}/>;
  } else if(guessRound > 0){
    content= <GameOverScreen roundNumber={guessRound} userNumber={userNumber} onRestart={configureNewGame} />
  }

  return (
    <View style={styles.container}>
      <Header title='Guess a Number'/>
      {content}
     
    </View>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
