import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//4 imported screens 
import HomeScreen from "./src/screens/HomeScreen";
import InputScreen from "./src/screens/InputScreen";
import ResultScreen from "./src/screens/ResultScreen";
import QandAScreen from "./src/screens/QandAScreen";

import "react-native-gesture-handler";
//icons imported
import Ionicons from "react-native-vector-icons/Ionicons";



const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Input") {
              iconName = focused 
                ? "add-circle" 
                : "add-circle-outline";
            } else if (route.name === "Result") {
              iconName = focused 
                ? "newspaper" 
                : "newspaper-outline";
            } else if (route.name === "QandA") {
              iconName = focused 
                ? "help-circle" 
                : "help-circle-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "cyan",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Input" component={InputScreen} />
        <Tab.Screen name="Result" component={ResultScreen} />
        <Tab.Screen name="QandA" component={QandAScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
