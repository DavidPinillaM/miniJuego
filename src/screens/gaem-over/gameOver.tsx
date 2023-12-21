import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/themes';

export const GameOver = () => {
  return (
    <View style={styles.container}>
      <Text>Game Over</Text>
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
});
