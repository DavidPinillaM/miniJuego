import React, { useState } from 'react'
import { Keyboard, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { Card } from '../../components/card/card';
import { colors } from '../../constants/themes';
import * as Yup from 'yup';
import { NumberContainer } from '../../components/numberContainer/numberContainer';


 //Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  number: Yup.number()
    .required('Número inválido, el número debe estar entre 1 y 99')
});



export const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState('');
  //console.log("enteredValue:", enteredValue)
  const [confirmed, setConfirmed] = useState(false);
  const [errorNumber, setErrorNumber] = useState('');
  const [seletedNumber, setSeletedNumber] = useState(null);

  //funcion que se encarga de validar que el usario escriba un numero de 1 al 9 y de setiar el error de mensaje
  const onHandlerChange = text => {
    //Se hace una validacion en la cual lo que yo escriba sea un numero del 1 al 9 de forma global y si lo que el usuario escribe no es un numero entonces que sea un string vacio(text.replace(/[^0-9]/g, ''))
    setEnteredValue(text.replace(/[^0-9]/g, ''));
    //Limpiar el mensaje de error cuando el usuario comienza a escribir nuevamente
    setErrorNumber('');
  };



  //Esta funcion lo que hace es resetar el numero a 0 dentro del TextInput
  const onHandleReset = () => {
    //Resetaeamos el numero ingresado en el TextInput a un string vacio
    setEnteredValue('');
    //limpiarmos cualquier error al ejecutar la funcion onHandleReset
    setErrorNumber('');
    setConfirmed(false);
  };



  const onHandleConfirm = async () => {
    //trim(): La funcion se utiliza para eliminar cualquier espacio en blanco adicional que pueda haber sido introducido accidentalmente por el usuario al principio o al final del número
    const trimmedValue = enteredValue.trim();

    if (trimmedValue === '') {
      setErrorNumber('Se requiere escribir un número');
      //Despues de establecer el mensaje de error, se utiliza el return para salir de la funcion y no se siga ejecuanto el codigo y retornar ese mensaje de error
      return;
    }

    //Convertimos el numero ingresado  por el usuario que es un string en el TextInput a un numero entero
    const chosenNumber = parseInt(enteredValue);

    try {
      //Valida el número elegido utilizando el esquema Yup
      await validationSchema.validate({number: chosenNumber});
    } catch (error) {
      // Manejar errores específicos del esquema de validación Yup
      if (error.path === 'number') {
        setErrorNumber(error.message);
      } else {
        setErrorNumber('Error de validación');
      }
      onHandleReset();
    }

    //Verifica si el número elegido es 0 entonces que se muestre un mensaje de error y si no es 0 entonces se modifiquen algunos hook
    if (chosenNumber === 0) {
      setErrorNumber('Número inválido, el número debe estar entre 1 y 99');
    }else {
      setConfirmed(true);
      setSeletedNumber(chosenNumber);
      setEnteredValue('');
    }
  };

  const onHandleStartGame = () => null;



//Este componente confirma si hay un estado de confrimacion en true renderiza un componente y si no no renderiza nada
  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Numero confirmado</Text>
        <NumberContainer number={seletedNumber} />
        <TouchableOpacity onPress={onHandleStartGame}>
          <Text style={styles.textConfirmed}>Iniciar juego</Text>
        </TouchableOpacity>
      </Card>
    ) : null;

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
          {errorNumber ? (
            <View style={styles.containerError}>
              <Text style={styles.errorText}>{errorNumber}</Text>
            </View>
          ) : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onHandleReset}>
              <Text style={styles.buttonRestart}>Reiniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleConfirm}>
              <Text style={styles.buttonConfirm}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </Card>
        <Confirmed />
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
  containerError: {
    marginTop: 10,
    backgroundColor: '#F23D3D',
    borderRadius: 10,
    padding: 5
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
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
  confirmedContainer: {

  },
  confirmedTitle: {

  },
  textConfirmed: {
    color: colors.primary
  }
});