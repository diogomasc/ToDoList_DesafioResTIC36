import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import NewTask from "./src/screens/NewTask";
import Welcome from "./src/screens/Welcome";
import SignIn from "./src/screens/SignIn";
import Register from "./src/screens/Register";
import TaskProvider from "./src/context/TaskContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <TaskProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NewTask" component={NewTask} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </TaskProvider>
    </>
  );
}
