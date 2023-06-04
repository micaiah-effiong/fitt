import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Setting";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // flex-1 items-center justify-center bg-white

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          header: () => null,
          animation: "fade",
        }}
      >
        <Stack.Screen name="profile" component={Home} />
        <Stack.Screen name="home" component={Profile} />
        <Stack.Screen name="settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
