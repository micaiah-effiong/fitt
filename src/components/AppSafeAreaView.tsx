import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyledComponent } from "nativewind";
import React, { PropsWithChildren } from "react";
import { Pressable, SafeAreaView, StatusBar, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { AppStackNavigationParamList } from "../types";

export default ({ children }: PropsWithChildren) => {
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
            <Pressable onPress={() => navigation.navigate("profile")}>
              <View>
                <StyledComponent
                  component={Feather}
                  name="user"
                  size={18}
                  className="text-slate-500"
                />
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("home")}>
              <View>
                <StyledComponent
                  component={Feather}
                  name="bar-chart"
                  size={18}
                  className="text-slate-500"
                />
              </View>
            </Pressable>
            <Pressable onPress={() => console.log("click")}>
              <View>
                <StyledComponent
                  component={Feather}
                  name="clipboard"
                  size={18}
                  className="text-slate-500"
                />
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("settings");
              }}
            >
              <View>
                <StyledComponent
                  component={Feather}
                  name="menu"
                  size={18}
                  className="text-slate-500"
                />
              </View>
            </Pressable>
            {/* <Pressable onPress={() => console.log("click")}>
                <View>
                  <StyledComponent
                    component={Feather}
                    name="plus"
                    size={22}
                    className="text-white font-semibold bg-[#22b1ec] rounded-full p-3 shadow-lg shadow-[#0e3444]"
                  />
                </View>
              </Pressable> */}
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};
