import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const api = "http://198.37.118.15:2628/api/heba/GetCountry";

export default class ApiPractice extends Component {
  onSubmit = () => {
    //   promise function
    fetch(api)
      .then((data) => {
        //   alert(JSON.stringify(data));
        return data.json();
      })
      .then((res) => {
        alert(JSON.stringify(res));
        this.setState({ data: res });
      })
      .catch((e) => {
        alert(e);
      });
  };

  state = {
    data: [],
  };

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          onPress={this.onSubmit}
          style={{
            width: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "gray",
          }}
        >
          <Text>call api</Text>
        </TouchableOpacity>

        <View style={{ width: "100%", padding: 10, marginTop: 30 }}>
          {this.state.data.map((item, index) => (
            <Text>{item.CountryNm}</Text>
          ))}
        </View>
      </View>
    );
  }
}
