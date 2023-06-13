import { StyledComponent } from "nativewind";
import { Image, ScrollView, View } from "react-native";
import Text from "../components/Text";
import AppSafeAreaView from "../components/AppSafeAreaView";

const Profile = () => {
  return (
    <AppSafeAreaView>
      <StyledComponent component={View} className="flex-1">
        <StyledComponent
          component={ScrollView}
          contentContainerStyle={{ flex: 1 }}
        >
          <StyledComponent component={View} className="bg-sky-900 h-[40%]">
            <StyledComponent
              component={View}
              className="flex justify-center items-center flex-grow"
            >
              <StyledComponent
                component={View}
                className="rounded-full p-3 bg-gray-50"
              >
                <StyledComponent
                  component={Image}
                  source={{
                    uri: "https://api.dicebear.com/5.x/bottts/png",
                    cache: "only-if-cached",
                  }}
                  className="w-28 h-28"
                />
              </StyledComponent>
              <StyledComponent
                component={View}
                className="py-3 flex items-center"
              >
                <Text className="text-white font-semibold text-lg">
                  John Doe
                </Text>
                <Text className="text-white">john.doe@example.com</Text>
              </StyledComponent>
            </StyledComponent>
          </StyledComponent>
          <StyledComponent component={View} className="p-3">
            <Text>John Doe</Text>
            <Text>john.doe@example.com</Text>
            <Text>Settings</Text>
            <Text>Notification</Text>
            <Text>Settings</Text>
            <Text>Settings</Text>
            {/* <Text>Settings</Text> */}
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    </AppSafeAreaView>
  );
};

export default Profile;
