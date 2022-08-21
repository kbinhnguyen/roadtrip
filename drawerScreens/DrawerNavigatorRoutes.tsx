import React, { useContext } from "react";
import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login";
import Archive from "../components/Archive/Archive";
import { AuthContext } from "../AuthProvider";

import ActiveTrip from "./ActiveTrip";


const Bottom = createBottomTabNavigator();

export default function DrawerNavigatorRoutes() {
  // const { username } = useContext(AuthContext);

  return (
    <Bottom.Navigator
    >
      <Bottom.Screen
       options={{
        tabBarIcon: () => (
          <Image
            source={{
              uri: "/Users/jasonchiou/Roadtrips/roadtrip/assets/google-maps-pin-google-maps-pin-google-map-maker-places-5abdbd0c442f58.1359204115223841402793.png",
            }}
            style={{ width: 30, height: 30, borderRadius: 10 }}
          />
        ),
      }}
      name="All Trips" children={() => (<Login /> )} />

      <Bottom.Screen
       options={{
        tabBarIcon: () => (
          <Image
            source={{
              uri: "/Users/jasonchiou/Roadtrips/roadtrip/assets/car.png",
            }}
            style={{ width: 30, height: 30, borderRadius: 10 }}
          />
        ),
      }}
      name="Active Trip"children={() => (<ActiveTrip /> )} />

      <Bottom.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={{
                uri: "/Users/jasonchiou/Roadtrips/roadtrip/assets/archive_icon.png",
              }}
              style={{ width: 30, height: 30, borderRadius: 10 }}
            />
          ),
        }}
      name="Archive" children={() => (<Archive /> )} />

    </Bottom.Navigator>
  )
}