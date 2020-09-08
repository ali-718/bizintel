import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Post from "./components/Post";

export default class App extends Component {
  onClickButton = () => {
    alert("hello world");
  };

  render() {
    return (
      <View>
        <Post />
        <Post />
      </View>
    );
  }
}
