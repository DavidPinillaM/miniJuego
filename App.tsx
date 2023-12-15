import React from 'react';
import { StyleSheet,View } from 'react-native';
import { Header } from './src/components/header/header';
import { StartGame } from './src/screens/start-game/startGame';

export const App = () =>{
  return (
    <View style={styles.container}>
         <Header 
           title='Adivina el numero'
         />
         <StartGame /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

