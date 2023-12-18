import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const NumberContainer = ({number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  number: {},
});