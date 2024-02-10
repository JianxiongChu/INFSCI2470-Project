import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export const ScreenTitle = ({ titleText }) => {
  return <Text style={styles.scrTitle}>{titleText}</Text>;
};

export const SectionTitle = ({ titleText }) => {
  return <Text style={styles.secTitle}>{titleText}</Text>;
};

export const SectionParagraph = ({ paragraphContent }) => {
  return <Text style={styles.secParagraph}>{paragraphContent}</Text>;
};

export const InputTitle = ({ titleText }) => {
  return <Text style={styles.inputTitle}>{titleText}</Text>;
};

const styles = StyleSheet.create({
  secTitle: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 6,
    backgroundColor: "cyan",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  scrTitle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  secParagraph: {
    textAlign: "left",
    paddingHorizontal: 4,
    fontSize: 15,
  },
  //the style of inputScreen
  inputTitle:{
    textAlign: "left",
    paddingLeft: 11,
    paddingTop:8
  }
});
