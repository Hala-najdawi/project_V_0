import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import MathNavigator from "./navgation";

export default class App extends Component {
  render() {
    return <MathNavigator />;
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});


