import React, { Component } from "react";
import { Text, View, TextInput, SafeAreaView, StatusBar } from "react-native";

export default class Forms extends Component {
  state = {
    Name: "",
    Age: "",
  };

  render() {
    return (
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        {/* <input placeholder value style onchange={event => event.target.value} /> */}
        <TextInput
          onChangeText={(val) => {
            this.setState({
              Name: val,
            });
          }}
          placeholder="Name"
          value={this.state.Name}
          style={{
            width: "90%",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "gray",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        />

        <TextInput
          keyboardType="numeric"
          onChangeText={(val) => {
            this.setState({
              Age: val,
            });
          }}
          placeholder="Age"
          value={this.state.Age}
          style={{
            width: "90%",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "gray",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        />

        <TextInput
          secureTextEntry={true}
          keyboardType="numeric"
          onChangeText={(val) => {
            this.setState({
              Age: val,
            });
          }}
          placeholder="Password"
          value={this.state.Age}
          style={{
            width: "90%",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "gray",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        />

        <View style={{ width: "100%", marginTop: 20, alignItems: "center" }}>
          <Text>Name :- {this.state.Name}</Text>
          <Text>Age :- {this.state.Age}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
