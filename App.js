import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import ActionBar from "./components/ActionBar";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            header: (props) => <ActionBar {...props} />,
          }}
        >
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
