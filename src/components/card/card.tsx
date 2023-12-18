import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../constants/themes';


//Le pasamos como prop children para que en cualquier parte de mi código cuando llame a mi componente Card y coloque algo dentro del las etiquetas <Card><Card/> sera lo que se va a renderizar.
//Se le pasa la prop style para poder pasar estilos adicionales al componente cuando se utilice ej: <Card style={{ backgroundColor: 'lightblue', borderRadius: 10 }}> <Text>Contenido de la tarjeta</Text></Card>
export const Card = ({ children, style }) => {
//Retornamos un componente View que envuelve a los elementos hijos (children)
         //Se toman los estilos ya definidos -- ...styles.container -- y se le agregar al componente view, luego se toma todos los estilos adicionales que se pasan como prop (...style) y los agrega al objeto de estilo, Esto permite que quien utilice este componente pueda proporcionar estilos personalizados adicionales
  return <View style={{...styles.container, ...style}}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});



