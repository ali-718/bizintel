import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Post from "./components/Post";

export default class App extends Component {
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

  state = {
    name: "Ali",
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
    ],
  };

  onChangeName = () => {
    this.setState({
      name: "Hidayat",
    });
  };

  render() {
    return (
      <View style={{ width: "100%", flex: 1, marginTop: 30 }}>
        <Text>{this.state.name}</Text>
        <TouchableOpacity onPress={this.onChangeName}>
          <Text>click me</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.state.posts.map((item, index) => (
            <Post
              onAlertClick={(name) => this.getName(name)}
              name={item.title}
              para={item.para}
            />
          ))}
        </ScrollView>
        {/* <input placeholder value  />  */}
        {/* flex= 0-1 */}
        {/* <View
          style={{ width: "100%", flex: 0.5, backgroundColor: "red" }}
        ></View>
        <View
          style={{ width: "100%", flex: 0.5, backgroundColor: "blue" }}
        ></View> */}
      </View>
    );
  }
}
