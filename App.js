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

const myPosts = [
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
];

export default class App extends Component {
  onClickButton = () => {
    alert("hello world");
  };

  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView>
          {myPosts.map((item) => (
            <Post
              onAlertClick={this.onClickButton}
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
