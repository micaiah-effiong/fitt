import { StyledComponent } from "nativewind";
import { Pressable, View, ScrollView } from "react-native";
import Text from "../components/Text";
import AppSafeAreaView from "../components/AppSafeAreaView";
import { AppRoutesList, AppStackNavigationParamList } from "../types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { Switch } from "react-native";
import { useState } from "react";

const Settings = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigationParamList>>();
  return (
    <AppSafeAreaView screenName="settings">
      <StyledComponent component={View} className="flex flex-1 bg-white">
        <StyledComponent
          component={View}
          className="h-[25%] bg-[#edd0ff] px-6 flex justify-evenly"
        >
          <StyledComponent
            component={Pressable}
            onPress={() => navigation.goBack()}
          >
            <StyledComponent
              component={Feather}
              name="arrow-left"
              size={30}
              className="font-semibold text-black"
            />
          </StyledComponent>
          <Text className="text-2xl font-bold">Settings</Text>
        </StyledComponent>
        <StyledComponent component={ScrollView} className="flex-grow">
          {/* <Button></Button> */}
          <MenuSectionTitle text="General" />
          <SettingsMenuItem
            activityType="PAGE_NAVIGATION"
            text="Account"
            iconName="user"
          />
          <SettingsMenuItem
            activityType="PAGE_NAVIGATION"
            text="Apprearance"
            iconName="eye"
          />
          <SettingsMenuItem
            activityType="PAGE_NAVIGATION"
            text="Privacy & Security"
            iconName="lock"
          />
          <MenuSectionTitle text="Notification" />
          <SettingsMenuItem
            activityType="TOGGLE"
            text="Allow Email notifications"
            iconName="bell"
          />
          <MenuSectionTitle text="Feedback" />
          <SettingsMenuItem
            activityType="PAGE_NAVIGATION"
            text="About"
            iconName="info"
          />
          <SettingsMenuItem
            activityType="PAGE_NAVIGATION"
            text="Send feedback"
            iconName="send"
          />
        </StyledComponent>
      </StyledComponent>
    </AppSafeAreaView>
  );
};

function SettingsMenuItem(prop: {
  text: string;
  iconName: string;
  navigateTo?: AppRoutesList;
  activityType: "TOGGLE" | "PAGE_NAVIGATION";
}) {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigationParamList>>();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <StyledComponent
      component={Pressable}
      className="px-5 active:bg-sky-900 rounded"
      onPress={() => {
        if (prop.navigateTo) {
          navigation.navigate(prop.navigateTo);
        }
      }}
    >
      <StyledComponent
        component={View}
        className=" py-5 border-b-[0.5px] border-b-gray-300 flex-row justify-between items-center"
      >
        <StyledComponent component={View} className="flex-row space-x-2">
          <StyledComponent
            component={Feather}
            name={prop.iconName}
            size={18}
            className="text-orange-700 font-semibold"
          />
          <Text className="font-semibold">{prop.text}</Text>
        </StyledComponent>
        {prop.activityType === "PAGE_NAVIGATION" ? (
          <StyledComponent component={View} className="">
            <StyledComponent
              component={Feather}
              name="arrow-right"
              size={18}
              className="text-orange-700 font-semibold"
            />
          </StyledComponent>
        ) : (
          <StyledComponent
            component={Switch}
            value={toggle}
            onValueChange={handleToggle}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={toggle ? undefined : "#f4f3f4"}
          />
        )}
      </StyledComponent>
    </StyledComponent>
  );
}

function MenuSectionTitle(prop: { text: string }) {
  return (
    <StyledComponent component={View} className="py-5 px-5 mt-3">
      <Text className="font-semibold text-lg text-gray-600 uppercase">
        {prop.text}
      </Text>
    </StyledComponent>
  );
}

export default Settings;
