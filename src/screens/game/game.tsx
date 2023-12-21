import React, { useEffect, useRef, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card } from '../../components/card/card';
import { NumberContainer } from '../../components/numberContainer/numberContainer';
import { colors } from '../../constants/themes';


//Esta funcion se encarga de generar un numero minimo aleatorio, un numero maximo aleatorio y escluirme el numero que yo tengo seleccionado 
const generateRandomNumber = (min, max, exclude) => {
  //Aqui generamos un numero minimo a partir del numero inicial que se a colocado que es 1
  min = Math.ceil(min);
  //Lo mismo aca se genera un numero maximo a partir del numero maximo que es 9
  max = Math.floor(max);
  //aqui se genera un numero aleatorio para redondearlo el numero a un decimal hacia el maximo por que Math.random me genera numeros decimales
  //luego se multiplica ese numero generado automaticamente por el numero minimo y maximo y se le suma el numero minimo y al hacer esto nunca va a superar el numero minimo ni maximo que se le a colocado
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
//Evaluamos si el numero generado automaticamente es extrictamente igual al numero exluido(numero que yo e seleccionado) entonces que me siga generando un numero aleatorio hatsa que me genere uno que yo no e seleccionado y cuando se genero un numero automatico que yo no e seleccionado entonces que me retorne ese numero para ser utilizado  
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export const Game = ({selectedNumber, onHandleGameOver}) => {
  //Se crea un hook donde se va a guardar ese numero generado aleatoriamente y el valo inicial del useState va a ser el numero generado automaticamente y se le pasa el numero minimo, el numero maximo, y el numero escluido que es el numero seleccionado por el usuario y luego ese nuemro generado aleatoriamente se va a mostrar en NumberContainer
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, selectedNumber),
  );
  //console.log('currentGuess:', currentGuess)
  const [rounds, setRounds] = useState(0); 

//hacemos refenria al valor menor que es 1  
  const currentLow = useRef(1);
//hacemos refencia al valor mayor que es 100  
  const currentHigh = useRef(100);


//Se coloca en la dependencias el numero generado aleatoriamente, el numero seleccionado por el usuario y la afuncion de onHandleGameOver para luego se evaluada cada una de las dependencias por la estructura if
//en la estructura if de evalua si el numero generado aleatoriamente es estrictamente igual al numero seleccionado por el usuario entonces se ejecuta la funcion onHandleGameOver y se le pasan las rondas jugadas para luego finalizar el juego 
  useEffect(() => {
    if (currentGuess === selectedNumber) rounds;
    //Cada ves que cambien alguna dependencia(currentGuess,selectedNumber o se ejecute la funcion onHandleGameOver) se va a evaluar la condicion de la estructura if
  }, [currentGuess, selectedNumber, onHandleGameOver]);

  
  const onHandleNextGuess = (direction) => {
    if (
      direction === 'lower' && currentGuess < selectedNumber ||
      direction === 'greater' && currentGuess > selectedNumber
    ) {
      Alert.alert('No mientas!', 'Sabes que eso es incorrecto', [
        {text: 'Perdon!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess); 
    setCurrentGuess(nextNumber);
    setRounds((rounds) => rounds +1);
  };


  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Numero del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.containerButtons}>
          <View style={styles.buttonMayor}>
            <TouchableOpacity onPress={() => onHandleNextGuess('lower')}>
              <Text style={styles.textButtonMayor}>Mayor</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => onHandleNextGuess('greater')}>
              <Text style={styles.textButtonMenor}>Menor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 20,
  },
  content: {
    width: '75%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
  },
  containerButtons: {
    flexDirection: 'row',
  },
  buttonMayor: {
    marginRight: 90,
  },
  textButtonMayor: {
    color: colors.primary,
  },
  textButtonMenor: {
    color: colors.primary,
  },
});
