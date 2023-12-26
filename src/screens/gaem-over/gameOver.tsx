import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../constants/themes';
import { Card } from '../../components/card/card';

export const GameOver = ({ rounds, selectedNumber, onHadleRestarGame }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image source={require('../../assets/img/gameOver.jpg')} style={styles.image}/>
        <Text style={styles.text}>Rondas: {rounds}</Text>
        <Text style={styles.text}>Numero seleccionado: {selectedNumber}</Text>
      </Card>
      <TouchableOpacity onPress={onHadleRestarGame}>
        <Text>Reiniciar juego</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
