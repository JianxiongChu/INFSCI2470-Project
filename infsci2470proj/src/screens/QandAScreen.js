import * as React from "react";
import { View, Text } from "react-native";
import our_img from '../../assets/our_img.png'

const  QandAScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <img src={our_img} />
    </View>

  );
};

export default QandAScreen;
