import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/themes';

export const NumberContainer = ({number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secundary,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});