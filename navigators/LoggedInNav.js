import useMe from "../hooks/useMe";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";
import UploadForm from "../screens/UploadForm";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function LoggedInNav() {
  const navigation = useNavigation();
  const { data } = useMe();
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="Tabs"
        options={{ headerShown: false }}
        component={TabsNav}
      />
      <Stack.Screen
        name="Upload"
        options={{ headerShown: false }}
        component={UploadNav}
      />
      <Stack.Screen
        name="UploadForm"
        options={{
          headerLeft: ({ tintColor }) => (
            <Ionicons
              color={tintColor}
              name="close"
              size={28}
              onPress={() => navigation.navigate("Upload")}
            />
          ),
          title: "Upload",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
        component={UploadForm}
      />
    </Stack.Navigator>
  );
}
