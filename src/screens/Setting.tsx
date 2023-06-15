import { StyledComponent } from "nativewind";
import { Pressable, View, ScrollView } from "react-native";
import Text from "../components/Text";
import AppSafeAreaView from "../components/AppSafeAreaView";
import { AppRoutesList, AppStackNavigationParamList } from "../types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

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
              className="font-semibold"
            />
          </StyledComponent>
          <Text className="text-2xl font-bold">Settings</Text>
        </StyledComponent>
        <StyledComponent component={ScrollView} className="flex-grow">
          {/* <Button></Button> */}
          <MenuSectionTitle text="General" />
          <SettingsMenuItem text="Account" iconName="user" />
          <SettingsMenuItem text="Notifications" iconName="bell" />
          <SettingsMenuItem text="Apprearance" iconName="eye" />
          <SettingsMenuItem text="Privacy & Security" iconName="lock" />
          <MenuSectionTitle text="Feedback" />
          <SettingsMenuItem text="About" iconName="info" />
          <SettingsMenuItem text="Send feedback" iconName="send" />
        </StyledComponent>
      </StyledComponent>
    </AppSafeAreaView>
  );
};

function SettingsMenuItem(prop: {
  text: string;
  iconName: string;
  navigateTo?: AppRoutesList;
}) {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigationParamList>>();

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
        className=" py-5 border-b-[0.5px] border-b-gray-300 flex-row space-x-2 items-center "
      >
        <StyledComponent
          component={Feather}
          name={prop.iconName}
          size={18}
          className="text-orange-700 font-semibold"
        />
        <Text className="font-semibold">{prop.text}</Text>
      </StyledComponent>
    </StyledComponent>
  );
}

function MenuSectionTitle(prop: { text: string }) {
  return (
    <StyledComponent component={View} className="py-5 px-5">
      <Text className="font-semibold text-lg text-gray-600 uppercase">
        {prop.text}
      </Text>
    </StyledComponent>
  );
}

export default Settings;
