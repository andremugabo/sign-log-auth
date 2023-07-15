import React from "react";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

const FormButtom = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButtom;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
