import { StyledComponent } from "nativewind";
import { View, ScrollView } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import CircularProgress from "react-native-circular-progress-indicator";
// import { AppStackNavigationParamList } from "../types";
// import { NavigationProp, useNavigation } from "@react-navigation/native";
import Text from "../components/Text";
import Feather from "react-native-vector-icons/Feather";

const Activities = () => {
  const progressValue = 65;
  return (
    <AppSafeAreaView screenName="activities" showAppBar>
      <View className="bg-white flex-1">
        <ScrollView className="flex-grow bg-gray-50 p-3">
          <View className="flex justify-center h-[150px] px-3 mb-1 bg-white">
            <View>
              <Text className="text-3xl font-semibold">Activities</Text>
              <Text>What are you up to?</Text>
            </View>
          </View>
          <View className="flex justify-center items-center my-1 p-3  bg-white">
            <View className="flex-1 space-y-3 items-center justify-center">
              <CircularProgress
                value={progressValue}
                valueSuffix="%"
                radius={40}
                activeStrokeWidth={7}
                inActiveStrokeWidth={7}
                activeStrokeColor={"#edd0ff"}
                // clockwise={false}
                duration={3000}
                // activeStrokeSecondaryColor={"#ffe667ff"}
                progressValueStyle={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: 15,
                }}
                inActiveStrokeColor="transparent"
                progressValueColor="black"
                showProgressValue={true}
              />
            </View>
            <View className="flex items-center mt-3 bg-white">
              <Text className="text-lg font-semibold">Status</Text>
            </View>
          </View>

          <View className="flex-1 my-1 py-3 px-3 bg-white">
            <View className="flex-row justify-between mb-8 flex-1">
              <View>
                <Text className="text-xs">Yesterday</Text>
                <Text className="text-lg font-semibold">Drink</Text>
              </View>
              <View className="flex items-end">
                <Text className="text-xs">June 27</Text>
                <Text className="text-lg font-semibold">3 times</Text>
              </View>
            </View>
            <View className="flex-1 flex-row">
              <DayPeriodStatCard volume={120} dayTimePeriod="MORNING" />
              <DayPeriodStatCard volume={300} dayTimePeriod="AFTERNOON" />
              <DayPeriodStatCard volume={90} dayTimePeriod="EVENING" />
            </View>
          </View>

          <View className="p-3 my-1 bg-white">
            <View className="flex-row space-x-3 items-center">
              <StyledComponent
                component={Feather}
                name="droplet"
                className="text-blue-400 text-2xl"
              />
              <View className="flex-1">
                <Text className="font-semibold text-lg">Hydrate</Text>
                <Text className="text-xs">8:00am</Text>
              </View>

              <Text className="ml-auto">20%</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </AppSafeAreaView>
  );
};

type DayPeriodStatCardProps = {
  dayTimePeriod: "MORNING" | "AFTERNOON" | "EVENING";
  volume: number;
};

function DayPeriodStatCard(prop: DayPeriodStatCardProps) {
  return (
    <View className="border-l-[#edd0ff] border-l-[3px] py-2 px-2 flex flex-1 justify-around">
      <Text className="text-xs capitalize">{prop.dayTimePeriod}</Text>
      <View className="flex-row items-baseline space-x-1">
        <Text className="font-semibold">{prop.volume}</Text>
        <Text>cl</Text>
      </View>
    </View>
  );
}

export default Activities;
