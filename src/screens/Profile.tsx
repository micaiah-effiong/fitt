import { StyledComponent } from "nativewind";
import { Image, Pressable, ScrollView, View } from "react-native";
import Text from "../components/Text";
import AppSafeAreaView from "../components/AppSafeAreaView";
import Feather from "react-native-vector-icons/Feather";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppRoutesList, AppStackNavigationParamList } from "../types";

const Profile = () => {
  return (
    <AppSafeAreaView screenName="profile">
      <View className="flex-1">
        <ScrollView className="flex-grow">
          <View className="bg-sky-900 h-[300px] flex-1">
            <View className="flex justify-center items-center flex-grow">
              <View className="rounded-full p-3 bg-gray-50">
                <Image
                  source={{
                    uri: "https://api.dicebear.com/5.x/bottts/png",
                    cache: "only-if-cached",
                  }}
                  className="h-20 aspect-square"
                />
              </View>
              <View className="py-3 flex items-center">
                <Text className="text-white font-semibold text-lg">
                  John Doe
                </Text>
                <Text className="text-white">john.doe@example.com</Text>
              </View>
            </View>
          </View>
          <View className="py-3 flex-1">
            <ProfileListItems
              text="Settings"
              iconName="settings"
              navigateTo="settings"
            />
            <ProfileListItems text="Reminder" iconName="bell" />
            {/* ---- */}
            <ProfileListItems text="Invite a friend" iconName="share-2" />
            <ProfileListItems text="Help" iconName="message-circle" />
            <ProfileListItems text="Log Out" iconName="log-out" />
            {/* <Text>Settings</Text> */}
          </View>
        </ScrollView>
      </View>
    </AppSafeAreaView>
  );
};

function ProfileListItems(prop: {
  text: string;
  iconName: string;
  navigateTo?: AppRoutesList;
}) {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigationParamList>>();

  return (
    <Pressable
      className="py-5 px-5 active:bg-sky-900 flex-row space-x-2 items-center rounded"
      onPress={() => {
        if (prop.navigateTo) {
          navigation.navigate(prop.navigateTo);
        }
      }}
    >
      <StyledComponent
        component={Feather}
        name={prop.iconName}
        size={18}
        className="text-orange-700 font-semibold"
      />
      <Text className="font-semibold">{prop.text}</Text>
    </Pressable>
  );
}

export default Profile;
