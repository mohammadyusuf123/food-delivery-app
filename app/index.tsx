import { Text, View } from "react-native";
import "./global.css";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl text-primary">Welcome to food-delivery-app 👋</Text>
    </View>
  );
}
