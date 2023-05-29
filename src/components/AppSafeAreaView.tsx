import { StyledComponent } from "nativewind";
import { PropsWithChildren } from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";

export default ({ children }: PropsWithChildren) => {
  console.log("current status-bar height", StatusBar.currentHeight);
  return (
    <StyledComponent
      component={SafeAreaView}
      className={`flex-1 bg-[#edd0ff] text-black mt-[${
        (StatusBar.currentHeight ?? 36) + 1
      }px]`}
    >
      <StatusBar
        translucent
        // backgroundColor={"transparent"}
        // barStyle={"dark-content"}
      />
      {children}
    </StyledComponent>
  );
};
