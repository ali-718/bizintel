import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class Post extends Component {
  render() {
    return (
      <View style={{ marginTop: 30, width: "100%", padding: 10 }}>
        {/* <div style="margin-top:20px;width:30px;color:red"> */}
        <Image
          style={{ width: "100%", height: 200 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2020/09/02/15/14/flower-5538547_960_720.jpg",
          }}
        />

        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "red", fontSize: 20 }}>Hello all</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of
          </Text>
        </View>

        {/* <a></a> <button onClick> */}

        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity onPress={this.onClickButton}>
            <View style={styles.btn}>
              <Text>Click</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <img src style /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
