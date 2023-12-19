import React, { useState } from 'react';
import { StyleSheet,View } from 'react-native';
import { Header } from './src/components/header/header';
import { StartGame } from './src/screens/start-game/startGame';
import { Game } from './src/screens/game/game';

export const App = () =>{
  const [userNumber, setUserNumber] = useState(null);

  //Esta funcion recibe como prop el numero seleccionado(selectedNumber) de la screen StartGame
  const onHandleStarGame = selectedNumber => {
    //Ese numeor seleccionado es guardado en setUserNumber
    setUserNumber(selectedNumber);
  };

  const Content = () =>
    //si hay un numero seleccionado en userNumber entonces me renderiza el componente <Game /> y si no hay ningun numero seleccionado entonces me redenriza StartGame <StartGame /> y se le pasa la funcion onHandleStarGame que recibe el numero seleccionado
    //al componente <Game /> se le pasa el numero seleccionado userNumber
    userNumber ? (
      <Game selectedNumber={userNumber} />
    ) : (
      <StartGame onHandleStarGame={onHandleStarGame} />
    );

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

