import { StatusBar } from "react-native";
import { styled, StyledComponent } from "nativewind";
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
import React, {
  useRef,
  useMemo,
  useCallback,
  useState,
  useEffect,
} from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CircularProgress from "react-native-circular-progress-indicator";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";

const StyledText = styled(Text, "font-montserrat text-black");
const StyledIcon = styled(Feather, "font-montserrat text-black");

function StatsCapsule(props: {
  icon: React.ComponentProps<typeof Feather>["name"];
  text: string;
  className?: string;
}) {
  return (
    <StyledComponent
      component={View}
      {...props}
      className={`w-2/5 flex flex-row space-x-2 items-center p-4 bg-sky-100 rounded-md shadow-lg shadow-red-300 ${props.className}`}
    >
      <StyledText>
        {/* <StyledComponent
          component={Feather}
          name={props.icon}
          className="font-bold text-black"
        /> */}
        <StyledIcon size={15} name={props.icon} className="text-black" />
      </StyledText>
      <StyledText>{props.text}</StyledText>
    </StyledComponent>
  );
}

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const snapPoints = useMemo(() => ["60%", "90%"], []);

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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // flex-1 items-center justify-center bg-white
    <NavigationContainer>
      <StyledComponent
        component={SafeAreaView}
        className="flex-1 bg-[#edd0ff] items-center justify-center text-black"
      >
        <StyledComponent component={GestureHandlerRootView} className="flex-1">
          <StyledComponent component={View} className="flex-1 flex">
            <StyledComponent
              component={View}
              className="h-14 bg-[#edd0ff] mt-7 w-full top-0  px-4"
            >
              <StyledComponent
                component={View}
                className="flex flex-row justify-between items-center h-full py-2"
              >
                <Pressable onPress={() => console.log("click")}>
                  <View>
                    <StyledComponent
                      component={Feather}
                      name="menu"
                      size={25}
                      className="text-slate-700"
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => handleOpenSheet(0)}>
                  <StyledComponent
                    component={View}
                    className="h-10 w-10 shadow-2xl bg-yellow-100 rounded-full"
                  >
                    <StyledComponent
                      component={Image}
                      source={{
                        uri: "https://api.dicebear.com/5.x/micah/png",
                        cache: "only-if-cached",
                      }}
                      className="w-full h-full rounded-full"
                    />
                  </StyledComponent>
                </Pressable>
              </StyledComponent>
            </StyledComponent>
            <StyledComponent
              component={View}
              className="h-auto flex-grow b-purple-600 px-4 bg-[#edd0ff] w-full"
            >
              <StyledComponent component={View} className="space-y-5 w-full">
                <StyledComponent
                  component={View}
                  className="flex flex-col gap-3"
                >
                  <StyledText className="text-md">Welcome back,</StyledText>
                  <StyledText className="text-3xl font-medium ">
                    Create your goal for your future
                  </StyledText>
                </StyledComponent>
                <View>
                  <StyledComponent
                    component={View}
                    className="w-full rounded-full bg-white px-2 flex-row items-center space-x-3 justify-evenly"
                  >
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
                  </StyledComponent>
                </View>
                <StyledComponent
                  component={View}
                  className="bg-[#734acc] rounded-2xl space-y-2 p-5 w-full"
                >
                  <StyledComponent component={View} className="flex-row">
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
                  </StyledComponent>
                  <View>
                    <StyledText className="text-white font-semibold text-lg">
                      Drink 10 cup of waters
                    </StyledText>
                  </View>
                  <View>
                    <StyledText className="text-white">
                      06:00am - 06:00pm
                    </StyledText>
                  </View>
                </StyledComponent>

                <StyledComponent
                  component={View}
                  className="w-max border1 h-auto flex-wrap flex flex-row gap-3 items-center justify-evenly"
                >
                  <StatsCapsule icon="droplet" text="250 ml" />
                  <StatsCapsule icon="target" text="500 ml" />
                  <StatsCapsule icon="coffee" text="179 ml" />
                  <StatsCapsule icon="watch" text="30 mis" />
                </StyledComponent>
              </StyledComponent>
            </StyledComponent>
            {/* <View className=" p-6 bg-slate-500 flex-1"> */}
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
                <StyledText>Awesome 🎉</StyledText>
              </StyledComponent>
            </BottomSheet>
            {/* </View> */}
            <StyledComponent
              component={View}
              className="h-24 flex-shrink bg-[#f7fbfe] w-full flex items-center flex-row px-4"
            >
              <StyledComponent
                component={View}
                className="flex-row justify-between px-3 h-4/6 rounded-3xl w-full items-center bg-white shadow-2xl shadow-slate-400"
              >
                <Pressable>
                  <View>
                    <StyledComponent
                      component={Feather}
                      name="home"
                      size={18}
                      className="text-slate-500"
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => console.log("click")}>
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
                      name="bell"
                      size={18}
                      className="text-slate-500"
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => console.log("click")}>
                  <View>
                    <StyledComponent
                      component={Feather}
                      name="settings"
                      size={18}
                      className="text-slate-500"
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => console.log("click")}>
                  <View>
                    <StyledComponent
                      component={Feather}
                      name="plus"
                      size={22}
                      className="text-white font-semibold bg-[#22b1ec] rounded-full p-3 shadow-lg shadow-[#0e3444]"
                    />
                  </View>
                </Pressable>
              </StyledComponent>
            </StyledComponent>
          </StyledComponent>

          <StatusBar
            translucent
            backgroundColor={"transparent"}
            barStyle={"dark-content"}
          />
        </StyledComponent>
      </StyledComponent>
    </NavigationContainer>
  );
}
