import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native"; //Need to import this
import DrawerNavigatorRoutes from "./DrawerNavigatorRoutes";
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
      <Stack.Screen name= "Home Screen" children={() => <HomeScreen /> }/>
      <Stack.Screen name= "DestinationViewer" children={() => <DestinationViewer /> }/>
      <Stack.Screen name= "AddCity" children={() => <AddCity /> }/>
      <Stack.Screen name= "AddPOI" children={() => <AddPOI /> }/>
      <Stack.Screen options={{ headerTransparent: true}} name= "PoiViewer" children={() => <PoiViewer /> }/>

    </Stack.Navigator>
  )
}