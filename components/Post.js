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
          <Text style={{ color: "red", fontSize: 20 }}>{this.props.name}</Text>
          <Text>{this.props.para}</Text>
        </View>

        {/* <a></a> <button onClick> */}

        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity onPress={this.props.onAlertClick}>
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
