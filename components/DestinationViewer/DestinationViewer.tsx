import React, { useState, useRef, useCallback } from 'react';
import { View, StyleSheet, Text, LayoutAnimation, ScrollView, Animated, Dimensions, Pressable, Modal, TextInput, Alert } from 'react-native';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import POI_List from './POI_List';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import config from '../../config.js';
import axios from 'axios';
import getTrip from './getTrip';
import updateDestinationOrder from './updateDestinationOrder';
import handleDeleteDestination from './handleDeleteDestination';


const { width: SCREEN_WIDTH } = Dimensions.get("window");


export default function DestinationViewer(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const tripId = props.tripId || route.params.tripId;
  const [cities, setCities] = useState([]);


  useFocusEffect(
    useCallback(() => {
      getTrip(tripId, setCities);
      return () => { setCities([]); }
    }, [])
  );

  const renderCities = ({ item, drag, isActive }) => {
    const [expanded, setExpanded] = useState(false);
    const scrollX = useRef(new Animated.Value(0)).current;

    const setPOIsAfterDelete = (newPOIs) => {
      item.POIs = newPOIs;
    }

    return (
      <ScaleDecorator>
        <View style={styles.cityandpoiwrapper}>
          <ScrollView
            contentContainerStyle={styles.scrollviewwrapper}
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }
            ], {useNativeDriver: false})}
            scrollEventThrottle={1}
          >
              <View style={styles.tilewrapper}>
                <Pressable
                  onPressIn={ () => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setExpanded(prevState => !prevState);
                  }}
                  style={styles.plusicon}
                >
                {expanded ? <FontAwesome name="minus-circle" size={36} color="white" /> : <FontAwesome name="plus-circle" size={36} color="white" />}
                </Pressable>
                <Pressable
                  onLongPress={drag}
                  disabled={isActive}
                  style={styles.item}
                >
                  <Text style={styles.title}>{item.cityName}</Text>
                </Pressable>
              </View>
              <View style={styles.deleteicon}>
                <Pressable
                  style={styles.deletearea}
                  onPressIn={() => { handleDeleteDestination(item, cities, setCities, tripId); }}
                >
                  <AntDesign name="delete" size={36} color="white" />
                </Pressable>
              </View>
          </ScrollView>
          {expanded && (
            <View style={styles.poiwrapper}>
              <POI_List
                POIs={item.POIs}
                currCity={item}
                cities={cities}
                setCities={setCities}
                tripId = {tripId}
                destinationId = {item.destination_id}
                lat = {item.lat}
                lng = {item.lng}
                cityName = {item.cityName}
                setPOIsAfterDelete = {setPOIsAfterDelete}
                />

            </View>
          )}
        </View>
      </ScaleDecorator>
    )
  }


  return (
    <View style={styles.wrapper}>
        {/* <Entypo name="location" size={36} color="black" />
        <AntDesign name="adduser" size={36} color="black" /> */}
      <View style = {styles.addAndShareContainer}>
        <Pressable style={styles.addCity}
          onPress = {() => {
            let maxIndex = 0;
            for (var i = 0; i < cities.length; i++) {
              if (cities[i]['order_number'] > maxIndex) {
                maxIndex = cities[i]['order_number'];
              }
            }

            navigation.navigate('AddCity', {trip_id: tripId, lastIndex: maxIndex})
          }
          }
          >
          <Text style = {styles.addDestination}>Add Destinations &nbsp;</Text>
          <FontAwesome name="plus-circle" size={18} color = "white" style={styles.addPOIButton}/>
        </Pressable>
        <Pressable style={styles.share}
          onPress = {() => {
            Alert.prompt('Share trip', 'Enter friend\'s email', (email) => {
              axios.post(`${config.LOCALTUNNEL}/share/${email}/${tripId}`)
                .then( () => {
                  Alert.alert('Sharing successful!', `Your friend ${email} can now access this trip`)
                })
                .catch( (e) => console.log(e))
          })}
          }
          >
          <Text>Share &nbsp;</Text>
          <FontAwesome name="plus-circle" size={18} color = "white" style={styles.addPOIButton}/>
        </Pressable>
      </View>
      <View style={styles.body}>
        <DraggableFlatList
          data={cities}
          onDragEnd={({data}) => updateDestinationOrder(data, cities, setCities, tripId)}
          keyExtractor={item => item.cityName}
          renderItem={renderCities}
        />
      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollviewwrapper: {
    justifyContent: 'center',
  },
  addAndShareContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  body: {
    flex: 9,
  },
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 8,
    width: '80%',
  },
  deleteicon: {
    height: 70,
    backgroundColor: '#E76F51',
    padding: 10,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 2,
    marginTop: 2,
  },
  title: {
    fontSize: 32,
    // fontFamily: 'Inter',
    color: 'white',
    background: 'yellow',
  },
  tilewrapper: {
    height:70,
    backgroundColor: '#4A5759',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 2,
    marginTop: 2,
  },
  plusicon: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deletearea: {
    alignItems: 'center',
    borderRadius: 6
    // height:
  },
  poiwrapper: {
    width: '100%',
  },
  addCity: {
    backgroundColor: '#B0C4B1',
    justifyContent: 'center',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 6,
    width: '50%',
  },
  share: {
    backgroundColor: '#B0C4B1',
    justifyContent: 'center',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 6,
    width: '50%'
  },
});
