import { Icon } from "native-base";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: 40,
          flexDirection: "row",
          paddingHorizontal: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => this.props.ali.goBack()}>
          <Icon name="arrow-back" type="Ionicons" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 20 }}>
          About
        </Text>
      </View>
    );
  }
}
