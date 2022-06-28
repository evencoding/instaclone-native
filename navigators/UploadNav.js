import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function UploadNav({ navigation }) {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: { backgroundColor: "white", top: 0 },
      }}
    >
      <Tab.Screen name="TabSelect">
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "black",
              },
              headerLeft: ({ tintColor }) => (
                <Ionicons
                  color={tintColor}
                  name="close"
                  size={28}
                  onPress={() => navigation.navigate("Tabs")}
                />
              ),
            }}
          >
            <Stack.Screen
              name="Select"
              component={SelectPhoto}
              options={{
                title: "Choose a photo",
              }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}
