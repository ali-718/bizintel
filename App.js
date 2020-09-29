import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/Screens/Home";
import About from "./app/Screens/About";

const StackNav = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackNav.Navigator>
          <StackNav.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <StackNav.Screen name="About" component={About} />
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
}
