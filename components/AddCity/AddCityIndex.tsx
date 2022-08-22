import React, { useState } from 'react';
import {Text, StyleSheet, View, ScrollView, TouchableHighlight, Button } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';
import Form from './Form';
import City from './City';
import config from '../../config'

  export default function AddCity ( { }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [list, setList] = useState<{name: string, id: string}[]>([]);
  const {trip_id, lastIndex} = route.params;

  var post = () => {
    // sends an array of objects to back end, must deconstruct and store each
    // individual city server side
    return axios.post(`${config.LOCALTUNNEL}/postCities`, list)
    .then(() => {
      console.log('success posting from front end');
      navigation.navigate('DestinationViewer', {tripId: trip_id});
    })
    .catch((err) => {console.log('Err in posting from front end', err)})
  };

  return (
    <View style= {styles.container}>
      <Form
        trip_id = {trip_id}
        setList = {setList}
        lastIndex = {lastIndex}
        list = {list}
        />
    <View style={styles.cityContainer}>
      {list.map((city: any) => {
        return (
          <City key={city.id} cityInfo= {city} />
        )
      })}
    </View>
      <TouchableHighlight
      style = {styles.button}
      onPress={post}>

      <Text style={styles.text}> Submit</Text>

      </TouchableHighlight>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  cityContainer : {
    position: 'relative',
    zIndex: 0,
    bottom: 360,
    width: 400,
    left: 17,
    height: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  button: {
    borderWidth: 1,
    position: 'relative',
    left: 75,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    borderRadius: 20,
    backgroundColor: '#B0C4B1'
  },

  text: {
    color: 'white',
  }
})

