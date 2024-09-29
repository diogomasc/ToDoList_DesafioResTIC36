import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import NewTask from "./src/screens/NewTask";
import TaskProvider from "./src/context/TaskContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <TaskProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NewTask" component={NewTask} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </TaskProvider>
    </>
  );
}
