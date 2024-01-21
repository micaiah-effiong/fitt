import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { StyledComponent, styled } from "nativewind";
import React, { useCallback, useMemo, useRef } from "react";
import { Image, Pressable, TextInput, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Feather from "react-native-vector-icons/Feather";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppSafeAreaView from "../components/AppSafeAreaView";
import Text from "../components/Text";
import { AppStackNavigationParamList } from "../types";

const StyledIcon = styled(Feather, "text-black");

function StatsCapsule(props: {
  icon: React.ComponentProps<typeof Feather>["name"];
  text: string;
  className?: string;
}) {
  return (
    <View
      {...props}
      className={`w-2/5 flex flex-row space-x-2 items-center p-4 bg-sky-100 rounded-md shadow-lg shadow-red-300 ${props.className}`}
    >
      <Text>
        {/* <StyledComponent
          component={Feather}
          name={props.icon}
          className="font-bold text-black"
        /> */}
        <StyledIcon size={15} name={props.icon} className="text-black" />
      </Text>
      <Text>{props.text}</Text>
    </View>
  );
}

type Props = NativeStackScreenProps<AppStackNavigationParamList>;

const Home = ({ navigation }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  // const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const snapPoints = useMemo(() => ["60%", "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  /* const handleCloseSheet = useCallback(() => {
    setSheetIsOpen(false);
    return bottomSheetRef.current?.close();
  }, []); */

  /* const handleOpenSheet = useCallback(
    (index: number) => {
      console.log(sheetIsOpen, snapPoints.length - 1);
      if (sheetIsOpen) {
        return handleCloseSheet();
      }

      setSheetIsOpen(true);
      return bottomSheetRef.current?.snapToIndex(index);
    },
    [handleCloseSheet, sheetIsOpen, snapPoints.length]
  ); */

  return (
    <AppSafeAreaView screenName="home">
      <View className="flex-1 flex">
        <View className="h-14  w-full px-4">
          <View className="flex flex-1 flex-row justify-end items-center h-full">
            <Pressable onPress={() => navigation.navigate("profile")}>
              <View className="h-10 w-10 shadow-2xl bg-yellow-100 rounded-full">
                <Image
                  source={{
                    uri: "https://api.dicebear.com/5.x/micah/png",
                    cache: "only-if-cached",
                  }}
                  className="w-full h-full rounded-full"
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View className="h-auto flex-grow b-purple-600 px-4 bg-[#edd0ff] w-full">
          <View className="space-y-5 w-full">
            <View className="flex flex-col gap-3">
              <Text className="text-md">Welcome back,</Text>
              <Text className="text-3xl font-medium ">
                Create your goal for your future
              </Text>
            </View>
            <View>
              <View className="w-full rounded-md bg-white px-2 flex-row items-center space-x-3 justify-evenly">
                <StyledComponent
                  component={Feather}
                  className="text-black"
                  name="search"
                  size={22}
                />

                <TextInput
                  className="flex-grow text-red-500 font-montserrat"
                  placeholder="Seach your plans"
                />
              </View>
            </View>
            <View className="bg-[#734acc] rounded-md space-y-2 p-5 w-full">
              <View className="flex-row">
                <CircularProgress
                  value={80}
                  valueSuffix="%"
                  radius={24}
                  activeStrokeWidth={7}
                  inActiveStrokeWidth={7}
                  activeStrokeColor={"#ffe667"}
                  clockwise={false}
                  duration={3000}
                  activeStrokeSecondaryColor={"#ffe667ff"}
                  progressValueStyle={{ color: "white" }}
                />
              </View>
              <View>
                <Text className="text-white font-semibold text-lg">
                  Drink 10 cup of waters
                </Text>
              </View>
              <View>
                <Text className="text-white">06:00am - 06:00pm</Text>
              </View>
            </View>

            <View className="w-max border1 h-auto flex-wrap flex flex-row gap-3 items-center justify-evenly">
              <StatsCapsule icon="droplet" text="250 ml" />
              <StatsCapsule icon="target" text="500 ml" />
              <StatsCapsule icon="coffee" text="179 ml" />
              <StatsCapsule icon="watch" text="30 mis" />
            </View>
          </View>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          backgroundStyle={{
            borderRadius: 5,
            backgroundColor: "#f3f3",
          }}
          handleIndicatorStyle={{
            backgroundColor: "#fff",
          }}
        >
          <StyledComponent
            component={BottomSheetView}
            className="px-4 py-2 bg-[#f6fafd] flex-1"
          >
            <Text>Awesome 🎉</Text>
          </StyledComponent>
        </BottomSheet>
        {/* </View> */}
      </View>
    </AppSafeAreaView>
  );
};
export default Home;
