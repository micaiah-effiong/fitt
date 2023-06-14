import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyledComponent } from "nativewind";
import React, { PropsWithChildren } from "react";
import { Pressable, SafeAreaView, StatusBar, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { AppRoutesList, AppStackNavigationParamList } from "../types";

export default ({
  children,
  screenName,
}: PropsWithChildren & { screenName: AppRoutesList }) => {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigationParamList>>();

  return (
    <StyledComponent
      component={SafeAreaView}
      className={`flex-1 bg-[#edd0ff] text-black`}
    >
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
      />
      <StyledComponent
        component={View}
        className={"h-full flex"}
        style={{
          paddingTop: StatusBar.currentHeight ?? 36,
        }}
      >
        <StyledComponent component={View} className="h-full flex flex-1">
          {children}
        </StyledComponent>
        <StyledComponent
          component={View}
          className="h-24 flex-shrink bg-[#f7fbfe] w-full flex items-center flex-row"
        >
          <StyledComponent
            component={View}
            className="flex-row justify-evenly px-3 h-4/6 w-full items-center bg-white shadow-2xl shadow-slate-400"
          >
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
            <MenuItem iconName="clipboard" screenName={screenName} />
            <MenuItem
              iconName="menu"
              screenName={screenName}
              navigateTo="settings"
            />
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
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
    <StyledComponent
      component={Pressable}
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
    </StyledComponent>
  );
}
