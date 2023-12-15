import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const Header = ({ title }) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#76D00F',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
