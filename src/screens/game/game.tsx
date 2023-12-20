import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Game = ({selectedNumber}) => {
  return (
    <View style={styles.container}>
        <Text>Game Screen</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
