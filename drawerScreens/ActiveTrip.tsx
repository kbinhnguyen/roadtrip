import React, { useState, useCallback, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { useFocusEffect } from '@react-navigation/native';
import DestinationViewer from "../components/DestinationViewer/DestinationViewer";
import axios from 'axios';
import config from '../config.js';
import { AuthContext } from '../AuthProvider.js';
import getTrip from '../components/DestinationViewer/getTrip';
import AddCity from "../components/AddCity/AddCityIndex";
import PoiViewer from "../components/POIViewer/PoiViewer";
import AddPOI from "../components/AddPOI/AddPOI";

const Stack = createStackNavigator();

export default function ActiveTrip() {

  const { username } = useContext(AuthContext);
  const [ tripId, setTripId ] = useState(null);

  useFocusEffect(
    useCallback(() => {
    const path = `${config.LOCALTUNNEL}/trips/${username}/active`
    axios.get(path)
      .then((response) => {
        console.log('response received');
        setTripId(response.data.id);
      })
      .catch((err) => {
        console.error('errored in gettingActiveTrip', err)});

    return () => { setTripId(null); }
    }, [])
  );

  return (
    <Stack.Navigator initialRouteName="DestinationViewer">
      <Stack.Screen name= "DestinationViewer" children={() => {
        if (tripId) {
          return (<DestinationViewer tripId={tripId} /> )
        }
        return null }}/>
      <Stack.Screen name= "AddCity" component={AddCity} />
      <Stack.Screen name= "AddPOI" component={AddPOI} />
      <Stack.Screen options={{ headerTransparent: true}} name= "PoiViewer" component={PoiViewer} />
    </Stack.Navigator>
  )
}