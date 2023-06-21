import { StyledComponent } from "nativewind";
import { View, ScrollView } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import { AppStackNavigationParamList } from "../types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Text from "../components/Text";
// import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Activities = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigationParamList>>();
  return (
    <AppSafeAreaView screenName="settings">
      <StyledComponent component={View} className="bg-white flex-1">
        <StyledComponent component={ScrollView} className="bg-white flex-grow">
          <StyledComponent
            component={View}
            className="flex justify-center h-[150px] px-3"
          >
            <StyledComponent component={View}>
              <Text className="text-3xl font-semibold">Activities</Text>
              <Text>What are you up to?</Text>
            </StyledComponent>
          </StyledComponent>

          <StyledComponent component={View} className="flex flex-1 px-3">
            <StyledComponent component={View} className="flex flex-1 space-y-1">
              <StyledComponent
                component={View}
                className="bg-sky-50 w-36 rounded-lg flex px-3"
              >
                <StyledComponent
                  component={MaterialCommunityIcons}
                  size={80}
                  className="text-sky-500"
                  name="bed-double-outline"
                />
              </StyledComponent>
              <StyledComponent component={View} className="flex">
                <Text className="text-lg font-semibold">Rest</Text>
                <Text>now</Text>
              </StyledComponent>
            </StyledComponent>
          </StyledComponent>

          <StyledComponent component={View} className="flex justify-center">
            <StyledComponent
              component={View}
              className="flex h-20 w-20 rounded-full items-center justify-center border "
            >
              <Text>50%</Text>
            </StyledComponent>
          </StyledComponent>
          <StyledComponent component={View}>
            <Text>Status</Text>
          </StyledComponent>
          <StyledComponent component={View}>
            <Text>Up next</Text>
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    </AppSafeAreaView>
  );
};
export default Activities;
