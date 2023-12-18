import React, { useState } from 'react'
import { Keyboard, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { Card } from '../../components/card/card';
import { colors } from '../../constants/themes';

export const StartGame = () => {
const [enteredValue, setEnteredValue] = useState('');  
//console.log("enteredValue:", enteredValue)


const onHandlerChange = (text) => {
  //Se hace una validacion en la cual lo que yo escriba sea un numero del 1 al 9 de forma global y si lo que el usuario escribe no es un numero entonces que sea un string vacio(text.replace(/[^0-9]/g, ''))
  setEnteredValue(text.replace(/[^0-9]/g, ''));
}


  return (
    //TouchableNativeFeedback se usa cuando se desea capturar eventos táctiles en un componente sin cambiar su estilo visual de manera predeterminada
    <TouchableNativeFeedback
      onPress={() => {
        //Keyboard se refiere al teclado virtual en dispositivos móviles y cuando se le coloca dismiss le estamos diciendo que se desapareca el teclado al hacer click fuera del TextInput
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Escribe un numero</Text>
          <TextInput
            value={enteredValue}
            keyboardType="numeric"
            style={styles.input}
            placeholder="0"
            onChangeText={onHandlerChange}
            //Esta propiedad permite que el usuario solamente pueda dijitar en este caso no mas de 3 numeros
            //maxLength={3}
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
    </TouchableNativeFeedback>
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