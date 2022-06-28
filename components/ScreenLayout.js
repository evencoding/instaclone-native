import { ActivityIndicator, View } from "react-native";
import AuthButton from "./auth/AuthButton";
import { logUserOut } from "../apollo";

export default function ScreenLayout({ loading, children }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
      {/* <AuthButton text="Log Out" disabled={false} onPress={logUserOut} /> */}
    </View>
  );
}
