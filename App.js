import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";
import Post from "./components/Post";
import Forms from "./Forms";

export default class App extends Component {
  // componentdidmount

  onClickButton = (index) => {
    console.log(index);

    const filteredData = this.state.posts.filter((item, i) => i != index);

    console.log(filteredData);
    this.setState({
      posts: filteredData,
    });
  };

  getName = (name) => {
    console.log(name);
  };

  onSubmitData = () => {
    const check = this.state.data.filter(
      (item) => item.name.toLowerCase() == this.state.MyName.toLowerCase()
    ).length;

    if (check > 0) {
      alert("User already exist");
      return;
    }

    this.setState({
      data: [
        ...this.state.data,
        { name: this.state.MyName, age: this.state.MyAge },
      ],
      MyName: "",
      MyAge: "",
    });
  };

  state = {
    MyName: "",
    MyAge: "",
    name: "Ali",
    data: [
      {
        name: "Ali Hiader",
        age: 22,
      },
      {
        name: "Hidayat",
        age: 28,
      },
    ],
    posts: [
      {
        title: "Ali Haider",
        para: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of`,
      },
      {
        title: "Hidayat",
        para: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of`,
      },
      {
        title: "Usama",
        para:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of",
      },
    ],
  };

  onChangeName = () => {
    this.setState({
      name: "Hidayat",
    });
  };

  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          alignItems: "center",
          flex: 1,
        }}
      >
        <TextInput
          placeholder="Name"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "gray",
            borderStyle: "solid",
            padding: 15,
            width: "90%",
          }}
          value={this.state.MyName}
          onChangeText={(val) => this.setState({ MyName: val })}
        />
        <TextInput
          value={this.state.MyAge}
          onChangeText={(val) => this.setState({ MyAge: val })}
          placeholder="Age"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "gray",
            borderStyle: "solid",
            padding: 15,
            width: "90%",
            marginTop: 20,
          }}
        />

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "gray",
            borderStyle: "solid",
            padding: 15,
            width: "90%",
            marginTop: 20,
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={this.onSubmitData}
        >
          <Text>Submit</Text>
        </TouchableOpacity>

        {this.state.data.map((item, index) => (
          <View
            style={{
              width: "90%",
              borderRadius: 10,
              backgroundColor: "gainsboro",
              padding: 20,
              marginTop: 20,
            }}
          >
            <Text>{item.name}</Text>
            <Text style={{ marginTop: 10 }}>{item.age}</Text>
          </View>
        ))}
      </SafeAreaView>
    );
  }
}
