import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import {
  Image,
  Text,
  TextInput,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRef, useMemo, useCallback, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CircularProgress from "react-native-circular-progress-indicator";

const SIcon = styled(Feather);
const SView = styled(View);
const SImage = styled(Image);
const SBottomSheetView = styled(BottomSheetView);

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleOpenSheet = useCallback((index: number) => {
    return bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const handleCloseSheet = useCallback(() => {
    return bottomSheetRef.current?.close();
  }, []);

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
              <Pressable onPress={() => console.log("click")}>
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
          <View className="h-auto flex-grow b-purple-600 px-4 bg-[#edd0ff]">
            <View className="space-y-5">
              <View className="flex flex-col gap-3">
                <Text className="text-md">Welcome back,</Text>
                <Text className="text-3xl font-semibold">
                  Create your goal for your future
                </Text>
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
            </View>
          </View>
          {/* <View className=" p-6 bg-slate-500 flex-1"> */}
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            backgroundStyle={{ borderRadius: 30 }}
          >
            <SBottomSheetView className="px-4 py-2 bg-[#f6fafd] flex-1">
              <Text>Awesome 🎉</Text>
            </SBottomSheetView>
          </BottomSheet>
          {/* </View> */}
          <View className="h-24 flex-shrink bg-[#f7fbfe] w-full flex items-center flex-row px-4">
            <SView className="flex-row justify-between px-3 h-4/6 rounded-3xl w-full items-center bg-white shadow-2xl shadow-slate-400">
              <Pressable onPress={() => handleOpenSheet(0)}>
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

        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
