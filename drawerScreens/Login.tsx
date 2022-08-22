import React, { useEffect, useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFocusEffect, CommonActions } from '@react-navigation/native';
import HomeScreen from "../components/HomeScreen/HomeScreen";
import DestinationViewer from "../components/DestinationViewer/DestinationViewer";
import AddCity from "../components/AddCity/AddCityIndex";
import PoiViewer from "../components/POIViewer/PoiViewer";
import AddPOI from "../components/AddPOI/AddPOI";

const Stack = createNativeStackNavigator();

export default function Login() {
  //main navigation will have the login (authentication porttion) as well as the bottom containers attached

  //MAIN
 /*change navigate to replace when compelete */


  return (
    <Stack.Navigator initialRouteName="Home Screen"
    // screenOptions={{ headerTransparent: true}}
    >
      <Stack.Screen name= "Home Screen" component={HomeScreen} />
      <Stack.Screen name= "DestinationViewer" component={DestinationViewer} />
      <Stack.Screen name= "AddCity" component={AddCity} />
      <Stack.Screen name= "AddPOI" component={AddPOI} />
      <Stack.Screen options={{ headerTransparent: true}} name= "PoiViewer" component={PoiViewer}/>
    </Stack.Navigator>
  )
}