import { SafeAreaView, StatusBar } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Setting";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyledComponent } from "nativewind";

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
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
