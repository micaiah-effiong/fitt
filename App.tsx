import { StatusBar } from "react-native";
import { styled } from "nativewind";
import {
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useRef, useMemo, useCallback, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CircularProgress from "react-native-circular-progress-indicator";

const SIcon = styled(Feather);
// const SFIcon = styled(FontAwesome);
const SView = styled(View);
const SImage = styled(Image);
const SBottomSheetView = styled(BottomSheetView);
const StyledText = styled(Text, "font-sora");

function StatsCapsule(props: {
  icon: React.ComponentProps<typeof SIcon>["name"];
  text: string;
  className?: string;
}) {
  return (
    <View
      {...props}
      className={`w-2/5 p-4 bg-sky-100 rounded-md shadow-lg shadow-red-300 ${props.className}`}
    >
      <Text className="text-black">
        <SIcon name={props.icon} className="font-bold" /> {props.text}
      </Text>
    </View>
  );
}

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const snapPoints = useMemo(() => ["60%", "90%"], []);

  // const [fontsLoaded] = useFonts({
  //   Sora_500Medium,
  // });

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleCloseSheet = useCallback(() => {
    setSheetIsOpen(false);
    return bottomSheetRef.current?.close();
  }, []);

  const handleOpenSheet = useCallback(
    (index: number) => {
      console.log(sheetIsOpen, snapPoints.length - 1);
      if (sheetIsOpen) {
        return handleCloseSheet();
      }

      setSheetIsOpen(true);
      return bottomSheetRef.current?.snapToIndex(index);
    },
    [handleCloseSheet, sheetIsOpen, snapPoints.length]
  );

  return (
    // flex-1 items-center justify-center bg-white
    <SafeAreaView className="flex-1 bg-[#edd0ff] items-center justify-center">
      <GestureHandlerRootView className="flex-1">
        <View className="flex-1 flex">
          <View className="h-14 bg-[#edd0ff] mt-7 w-full top-0  px-4">
            <View className="flex flex-row justify-between items-center h-full py-2">
              <Pressable onPress={() => console.log("click")}>
                <View>
                  <SIcon name="menu" size={25} className="text-slate-700" />
                </View>
              </Pressable>
              <Pressable onPress={() => handleOpenSheet(0)}>
                <SView className="h-10 w-10 shadow-2xl bg-yellow-100 rounded-full">
                  <SImage
                    source={{
                      uri: "https://api.dicebear.com/5.x/micah/png",
                      cache: "only-if-cached",
                    }}
                    className="w-full h-full rounded-full"
                  />
                </SView>
              </Pressable>
            </View>
          </View>
          <View className="h-auto flex-grow b-purple-600 px-4 bg-[#edd0ff] w-full">
            <View className="space-y-5 w-full">
              <View className="flex flex-col gap-3">
                <Text className="text-md text-black">Welcome back,</Text>
                <StyledText className="text-3xl font-light text-black">
                  Create your goal for your future
                </StyledText>
              </View>
              <View>
                <View className="w-full rounded-full bg-white p-2 flex-row items-center space-x-3 justify-evenly">
                  <SIcon name="search" size={22} className="" />

                  <TextInput
                    className="flex-grow"
                    placeholder="Seach your plans"
                  />
                </View>
              </View>
              <View className="bg-[#734acc] rounded-2xl space-y-2 p-5 w-full">
                <View className="flex-row">
                  <CircularProgress
                    value={80}
                    valueSuffix="%"
                    radius={24}
                    activeStrokeWidth={7}
                    inActiveStrokeWidth={7}
                    activeStrokeColor={"#ffe667"}
                    clockwise={false}
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
          {/* <View className=" p-6 bg-slate-500 flex-1"> */}
          <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            backgroundStyle={{ borderRadius: 30 }}
          >
            <SBottomSheetView className="px-4 py-2 bg-[#f6fafd] flex-1">
              <Text className="text-black">Awesome 🎉</Text>
            </SBottomSheetView>
          </BottomSheet>
          {/* </View> */}
          <View className="h-24 flex-shrink bg-[#f7fbfe] w-full flex items-center flex-row px-4">
            <SView className="flex-row justify-between px-3 h-4/6 rounded-3xl w-full items-center bg-white shadow-2xl shadow-slate-400">
              <Pressable>
                <View>
                  <SIcon name="home" size={18} className="text-slate-500" />
                </View>
              </Pressable>
              <Pressable onPress={() => console.log("click")}>
                <View>
                  <SIcon
                    name="bar-chart"
                    size={18}
                    className="text-slate-500"
                  />
                </View>
              </Pressable>
              <Pressable onPress={() => console.log("click")}>
                <View>
                  <SIcon name="bell" size={18} className="text-slate-500" />
                </View>
              </Pressable>
              <Pressable onPress={() => console.log("click")}>
                <View>
                  <SIcon name="settings" size={18} className="text-slate-500" />
                </View>
              </Pressable>
              <Pressable onPress={() => console.log("click")}>
                <View>
                  <SIcon
                    name="plus"
                    size={22}
                    className="text-white font-semibold bg-[#22b1ec] rounded-full p-3 shadow-lg shadow-[#0e3444]"
                  />
                </View>
              </Pressable>
            </SView>
          </View>
        </View>

        <StatusBar
          translucent
          backgroundColor={"transparent"}
          barStyle={"dark-content"}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
