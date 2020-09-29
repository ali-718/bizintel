import React, { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Home</Text>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            backgroundColor: "green",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
          }}
          onPress={() => this.props.navigation.navigate("About")}
        >
          <Text style={{ color: "white" }}>Press</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Home;
