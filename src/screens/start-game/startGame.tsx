import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const StartGame = () => {
  return (
    <View style={styles.container}>
      <Text>Start Game</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});