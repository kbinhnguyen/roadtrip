import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function City ( {cityInfo}: {cityInfo: any}) {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}> {cityInfo.name} </Text>
    </View>
  )
};

var styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    padding: 10,
    width: 150,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#DEDBD2',
  },

  text: {
    fontSize: 18,
  }
})