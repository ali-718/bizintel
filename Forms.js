import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default class Forms extends Component {
  state = {
    Name: "",
    Age: "",
    data: [],
  };

  // addNewData = () => {
  //   this.setState({
  //     data: [
  //       ...this.state.data,
  //       { Name: this.state.Name, Age: this.state.Age },
  //     ],
  //   });
  // };

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

        {/* display :- flex */}
        {/* align-items: flex-start/ center/ flex-end */}
        {/* justify-content: flex-start/ center/ flex-end */}
        {/* flex-direction: row/ column */}

        {/* <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{ width: 100, height: 100, backgroundColor: "blue" }}
          ></View>
          <View
            style={{ width: 100, height: 100, backgroundColor: "brown" }}
          ></View>
        </View> */}

        {/* Header Design */}

        <View
          style={{
            width: "100%",
            height: 40,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "20%",
              height: 40,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <Text style={{ color: "black" }}>menu</Text>
          </View>

          <View
            style={{
              width: "60%",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "black" }}>BizIntel</Text>
          </View>

          <View
            style={{
              width: "20%",
              height: 40,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 10,
            }}
          >
            <Text style={{ color: "black" }}>menu</Text>
          </View>
        </View>

        {/* Header Design End */}

        {/* <TouchableOpacity
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
            backgroundColor: "green",
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => this.addNewData()}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity> */}

        {/* <TextInput
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
        /> */}

        {/* {this.state.data.map((item, i) => (
          <View
            style={{
              width: "90%",
              margin: 10,
              alignItems: "center",
              padding: 10,
              backgroundColor: "gainsboro",
              borderRadius: 10,
            }}
          >
            <Text>Name :- {item.Name}</Text>
            <Text style={{ marginTop: 10 }}>Age :- {item.Age}</Text>
          </View>
        ))} */}
      </SafeAreaView>
    );
  }
}
