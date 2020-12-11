import { Icon } from "native-base";
import React, { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";

export class About extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header ali={this.props.navigation} />
        <Text>About</Text>
      </SafeAreaView>
    );
  }
}

export default About;
