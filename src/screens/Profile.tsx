import { StyledComponent } from "nativewind";
import { View } from "react-native";
import Text from "../components/Text";
import AppSafeAreaView from "../components/AppSafeAreaView";

const Profile = () => {
  return (
    <AppSafeAreaView>
      <StyledComponent component={View} className="flex px-4">
        <Text>My Profile</Text>
        {/*     Image      */}
        <Text>John Doe</Text>
        <Text>john.doe@example.com</Text>
        <Text>Settings</Text>
        <Text>Notification</Text>
        <Text>Settings</Text>
        {/* <Text>Settings</Text> */}
      </StyledComponent>
    </AppSafeAreaView>
  );
};

export default Profile;
