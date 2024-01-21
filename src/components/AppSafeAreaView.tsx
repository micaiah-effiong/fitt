import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyledComponent } from "nativewind";
import React, { PropsWithChildren } from "react";
import { Pressable, SafeAreaView, StatusBar, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { AppRoutesList, AppStackNavigationParamList } from "../types";
import Text from "./Text";

type Prop = {
  screenName: AppRoutesList;
  showAppBar?: boolean;
} & PropsWithChildren;
export default (prop: Prop) => {
  const { children, screenName, showAppBar = false } = prop;

  const navigation =
    useNavigation<NavigationProp<AppStackNavigationParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-[#edd0ff] text-black">
      <StatusBar backgroundColor="#edd0ff" barStyle="dark-content" />
      <View className="flex-1">
        <View className="flex-1">
          {showAppBar && (
            <View className="flex-row items-center justify-between px-1 py-3 bg-transparent bg-[#edd0ff]">
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <StyledComponent
                  component={Feather}
                  name="arrow-left"
                  className="text-3xl text-black"
                />
              </Pressable>
              <Text className="text-lg font-semibold capitalize">
                {prop.screenName}
              </Text>
            </View>
          )}
          {children}
        </View>
        <View className="h-24 flex-shrink bg-[#f7fbfe] w-full flex items-center flex-row">
          <View className="flex-row justify-evenly px-3 h-4/6 w-full items-center bg-white shadow-2xl shadow-slate-400">
            <MenuItem
              iconName="user"
              screenName={screenName}
              navigateTo="profile"
            />
            <MenuItem
              iconName="bar-chart"
              screenName={screenName}
              navigateTo="home"
            />
            <MenuItem
              iconName="clipboard"
              navigateTo="activities"
              screenName={screenName}
            />
            <MenuItem
              iconName="menu"
              screenName={screenName}
              navigateTo="settings"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

function MenuItem(prop: {
  iconName: string;
  screenName: AppRoutesList;
  navigateTo?: AppRoutesList;
}) {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigationParamList>>();
  const isActive = prop.screenName == prop.navigateTo;
  return (
    <Pressable
      className={`${
        isActive ? "border-b-4 border-b-blue-200" : ""
      } h-full flex justify-center px-3`}
      onPress={() => {
        if (prop.navigateTo) {
          navigation.navigate(prop.navigateTo);
        }
      }}
    >
      <StyledComponent
        component={Feather}
        name={prop.iconName}
        size={isActive ? 20 : 18}
        className="text-slate-500"
      />
    </Pressable>
  );
}
