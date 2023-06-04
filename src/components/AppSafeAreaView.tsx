import { StyledComponent } from "nativewind";
import { PropsWithChildren } from "react";
import { SafeAreaView, Platform, StatusBar, View } from "react-native";

export default ({ children }: PropsWithChildren) => {

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
      <StyledComponent component={View} className={"h-full flex"} style={{
        paddingTop: StatusBar.currentHeight ?? 36
      }}>
        <StyledComponent component={View} className={"h-full flex"}>
          {children}
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};
