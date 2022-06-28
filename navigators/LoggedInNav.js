import useMe from "../hooks/useMe";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";

const Stack = createNativeStackNavigator();

export default function LoggedInNav() {
  const { data } = useMe();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Tabs" component={TabsNav} />
      <Stack.Screen name="Upload" component={UploadNav} />
    </Stack.Navigator>
  );
}
