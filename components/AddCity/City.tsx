import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function City ( {cityInfo}: {cityInfo: any}) {
  // console.log('within the city', cityInfo.name)
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
    // width: 300,
    // height: 50,
  },

  text: {
    fontSize: 18,

  }
})