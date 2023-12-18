import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Card } from '../../components/card/card';
import { colors } from '../../constants/themes';

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comenzar juego</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Escribe un numero</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="0"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.buttonRestart}>Reiniciar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.buttonConfirm}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.text,
    textAlign: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 15,
    color: colors.text,
    paddingVertical: 5,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    // establecer la anchura mínima de un componente. Esta propiedad especifica la anchura mínima que el componente debe tener, asegurando que no se reduzca por debajo de ese valor, incluso si el contenido del componente es menor.
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonRestart: {
    color: colors.secundary,
  },
  buttonConfirm: {
    color: colors.primary,
  },
});