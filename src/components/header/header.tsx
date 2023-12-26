import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/themes';


export const Header = ({ title }) => {

  return (
    <View style={styles.container}>
       <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black
  },
});
 