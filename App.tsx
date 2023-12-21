import React, { useState } from 'react';
import { StyleSheet,View } from 'react-native';
import { Header } from './src/components/header/header';
import { StartGame } from './src/screens/start-game/startGame';
import { Game } from './src/screens/game/game';
import { GameOver } from './src/screens/gaem-over/gameOver';

export const App = () =>{
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  //Esta funcion recibe como prop el numero seleccionado(selectedNumber) de la screen StartGame
  const onHandleStarGame = selectedNumber => {
    //Ese numeor seleccionado es guardado en setUserNumber
    setUserNumber(selectedNumber);
  };

  const onHandleGameOver = (rounds) => {
    setGuessRounds(rounds);
  }


  const Content = () => {
   if (userNumber && guessRounds <= 0) {
    return <Game selectedNumber={userNumber} onHandleGameOver={onHandleGameOver}/>;
   }

   if (guessRounds > 0) {
     return <GameOver />;
   }
   return <StartGame onHandleStarGame={onHandleStarGame} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

