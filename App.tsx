// //Louisa's section -- uncomment to work on Navigation & Flow
// import * as React from "react";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import PoiViewer from './components/PoiViewer.tsx';
// import MainNavigation from './drawerScreens/Login'; //Testing
// import { NavigationContainer } from "@react-navigation/native"; //Testing
// // import Login from './drawerScreens/Login'; //Testing
// import DrawerNavigatorRoutes from './drawerScreens/DrawerNavigatorRoutes'; //Testing
// import { createStackNavigator } from "@react-navigation/stack"; //Testing
// import AuthProvider, { AuthContext } from "./AuthProvider";
// //NEW THINGS TO IMPORT
// import FakeHomeScreen from './components/FakeHomeScreen/FakeHomeScreen';
// import Login from './components/Login/Login';


// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
//   useInfiniteQuery,
// } from "react-query";




// // //Louisa's section -- uncomment to work on Navigation & Flow

// // const Stack = createStackNavigator(); //Testing
// // const queryClient = new QueryClient();
// /*<View>
//   <Text>Stuff</Text>
//   <MainNavigation />

//   <StatusBar style="auto" />
// </View>
// */



// //Louisa's section -- uncomment to work on Navigation and flow
// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator  initialRouteName="Login">
// //         <Stack.Screen name="Login" children={() => (<Login /> )}  options={{headerShown: false}} />
// //         <Stack.Screen name="DrawerNavigatorRoutes" children={() => (<DrawerNavigatorRoutes /> )}  options={{headerShown: false}}/>
// //       </Stack.Navigator>
// //   </NavigationContainer>
// //   );
// // }


// export default function App() {
//   const { username, setUsername } = React.useContext(AuthContext);

//   const [checking, setIsChecking] = React.useState(true);


//   return (
//     <AuthProvider>
//         <QueryClientProvider client={queryClient}>
//           <NavigationContainer>
//             <Stack.Navigator  initialRouteName="Login">
//               {username !== null ? (
//                  <Stack.Screen name="DrawerNavigatorRoutes" children={() => (<DrawerNavigatorRoutes /> )}  options={{headerShown: false}}/>
//               ): (
//                 <Stack.Screen name="Login" children={() => (<Login /> )}  options={{headerShown: false}} />
//               )}


//             </Stack.Navigator>
//           </NavigationContainer>
//       </QueryClientProvider>
//     </AuthProvider>
//   );
// }



/* Binh's section to temporarily render everyone's components - work on flow later */

import * as React from 'react';
import { Platform, UIManager } from "react-native";
import AuthProvider from './AuthProvider';
import Root from './root.js';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider >
      )
  }
