import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default class App extends Component {
  state = {
    data: [],
    Name: "",
    Age: "",
  };

  onSubmit = () => {
    // ... spread operator

    const name = this.state.data.filter(
      (item) =>
        item.Name.trim().toLowerCase() == this.state.Name.trim().toLowerCase()
    );

    if (name.length > 0) {
      alert("duplicate checked");
      return;
    }

    this.setState({
      data: [
        ...this.state.data,
        { Name: this.state.Name, Age: this.state.Age },
      ],
      Name: "",
      Age: "",
    });
  };

  render() {
    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderStyle: "solid",
              width: "90%",
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Name"
            value={this.state.Name}
            onChangeText={(val) => this.setState({ Name: val })}
          />

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderStyle: "solid",
              width: "90%",
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
            }}
            keyboardType="numeric"
            placeholder="Age"
            value={this.state.Age}
            onChangeText={(val) => this.setState({ Age: val })}
          />

          <TouchableOpacity onPress={this.onSubmit}>
            <View
              style={{
                width: 150,
                height: 40,
                borderRadius: 10,
                backgroundColor: "tomato",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white" }}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
          {this.state.data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: "90%",
                  padding: 10,
                  backgroundColor: "gainsboro",
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <Text>Name :- {item.Name}</Text>
                <Text>Age :- {item.Age}</Text>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}
