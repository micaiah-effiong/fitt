import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Setting";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/screens/Profile";
import { AppStackNavigationParamList } from "./src/types";
import Activities from "./src/screens/Activity";
import { StyledComponent } from "nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator<AppStackNavigationParamList>();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // flex-1 items-center justify-center bg-white

    <StyledComponent component={GestureHandlerRootView} className="flex-1">
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            header: () => null,
            animation: "fade",
          }}
        >
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="settings" component={Settings} />
          <Stack.Screen name="activities" component={Activities} />
        </Stack.Navigator>
      </NavigationContainer>
    </StyledComponent>
  );
}
