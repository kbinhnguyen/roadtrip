import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import config from '../../config';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function Form ( {list, setList, trip_id, lastIndex}:
  {list: any, setList: any, trip_id: number, lastIndex: number}) {

  const [location, setLocation] = useState('');

  return (
    <View style = {styles.container}>

      {/* Auto Complete Field */}
     <GooglePlacesAutocomplete
      placeholder='Search'
      textInputProps= {{
        value : {location},
        onChangeText : (text) => {
          setLocation('')
        }
      }}
      enablePoweredByContainer = {false}
      onPress={(data, details = null) => {
        var cityInfo = {
          name: data.structured_formatting.main_text,
          id: data.place_id,
          lat: details?.geometry.location.lat,
          lng: details?.geometry.location.lng,
          trip_id: trip_id,
          lastIndex: lastIndex
        }
        setList([...list, cityInfo])
        setLocation('')
      }}
      styles = {{ textInput: styles.textInput, zIndex: 20 }}
      query={{
        key: config.GOOGLE_MAPS_API,
        language: 'en',
      }}
      fetchDetails = {true}
      />
    </View>
  )
};

var styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '80%',
    zIndex: 1
  },

  textInput: {
    height: 50,
    backgroundColor: '#eee',
    marginVertical: 5,
    borderRadius: 30,
    fontSize: 20,
    paddingHorizontal: 25
  }
})

var inputStyle = StyleSheet.create({
  textInput: {

  }
})