import React, { useState, useEffect } from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Pressable, LayoutAnimation} from 'react-native';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { getItemAsync } from 'expo-secure-store';
import axios from 'axios';
import { LOCALTUNNEL } from '../../config';

const POI_List = (props) => {
  const navigation = useNavigation();
  const [data, setData] = useState(props.POIs);

  // console.log('here are the props', props)
  // const deletePOI = (POI) => {
  //   console.log('deletePOI was invoked on', POI);
  //   const path = `http://localhost:3000/trips/${POI.id}`
  //   axios.delete('http://localhost:3000/trips/')
  // }

  const reorderPOIs = (data: Array<Object>) => {
    // console.log('reorderPOIs invoked, setting data and attempting a PATCH request')
    // console.log('new data ->>>>> ', data)

    //axios put request
    //.then -> getTrip request
    //
    // console.log('reordering data ----------> ', data)

    // console.log(LOCALTUNNEL);
    // console.log(props.tripId);
    // console.log(props.destinationId);

    const axiosObj = {};
    for (var i = 0; i < data.length; i++) {
      axiosObj[data[i].id] = i + 1;
    }
    // console.log('axiosOBJ ----> ', axiosObj);
    const path =`${LOCALTUNNEL}/trips/${props.tripId}/destinations/${props.destinationId}/pois`
    // console.log(path);

    axios.put(path, axiosObj)
    .then((response) => {
      setData(data);
    })
    .catch((err) => {
      console.error ('errored in the POI put request', err)
    });
    setData(data);

  }

  const renderPOI = ({item, drag, isActive}) => (
    <View style={styles.tilewrapper}>
      <Pressable style={styles.texttile}>
         <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={styles.POI}
          onPress = {() => {
            // console.log(item.id)
            navigation.navigate('POIViewer',
            {
              poi_id: item.id
            });
            //need to pass specific POI ID
          }}>
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      </Pressable>
      <Pressable
        onPressIn={ () => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          //some deletion function
        }}
        style={styles.minusicon}
      >
        <FontAwesome
          name="minus-circle"
          size={36}
          color="white"
          onPress = {() => {deletePOI(item)}}/>
      </Pressable>
    </View>
  );

  return (
    <View>
      <Pressable style={styles.addPOI}
        onPress = {() => {
          console.log(props.lat, props.lng, props.cityName);
          navigation.navigate('AddPOI',
          {
            destination_id: props.destinationId,
            cityName: props.cityName,
            trip_id: props.tripId,
            latitude: props.lat,
            longitude: props.lng,
            current_num_POIs: 0,
            trip_destination_id: 0
          })
        }
        }
      >
        <Text>Add a POI &nbsp;</Text>
        <FontAwesome name="plus-circle" size={18} color="white" style={styles.addPOIButton}/>
      </Pressable>
      <DraggableFlatList
        data={data}
        onDragEnd={({data}) => reorderPOIs(data)}
        keyExtractor={item => item.id}
        renderItem={renderPOI}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  POI: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 30,

  },
  title: {
    fontSize: 15,
  },
  minusicon: {
    flexDirection: 'row',
  },
  tilewrapper: {
    // width: '80%',
    backgroundColor: '#F4A261',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 6
  },
  texttile: {
    width: '80%',
  },
  addPOI: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 6
  },

});

// jasper -> trip_id

export default POI_List;