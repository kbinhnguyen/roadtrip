import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./drawerScreens/Login"; //Testing
import { NavigationContainer } from "@react-navigation/native"; //Testing
import DrawerNavigatorRoutes from "./drawerScreens/DrawerNavigatorRoutes"; //Testing
import Login from "./components/Login/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Archive from "./components/Archive/Archive";
import AuthProvider, { AuthContext } from "./AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useInfiniteQuery,
} from "react-query";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();


export default function Root() {
  const { username, setUsername } = React.useContext(AuthContext);

  const [checking, setIsChecking] = React.useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {username !== null ? (
            <Stack.Screen
              name="DrawerNavigatorRoutes"
              children={() => <DrawerNavigatorRoutes />}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Login"
              children={() => <Login />}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}