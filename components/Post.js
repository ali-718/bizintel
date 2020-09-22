import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class Post extends Component {
  componentWillReceiveProps(props) {
    console.log(props);
    // this.setState({ img: props.profile.img });
  }

  state = {
    img: "",
  };

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
          <TouchableOpacity
            onPress={() => this.props.onAlertClick(this.props.name)}
          >
            <View style={styles.btn}>
              <Text>delete</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.onActiveClick(this.props.name)}
          >
            <View style={styles.btn}>
              <Text>active</Text>
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
