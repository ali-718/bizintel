import React, { Component } from "react";
import { Text, View } from "react-native";
import ApiPractice from "./app/Screens/ApiPractice";
import Form from "./app/Screens/FormPractice";
import Router from "./Router";

export default class App extends Component {
  render() {
    return <Router />;
  }
}
