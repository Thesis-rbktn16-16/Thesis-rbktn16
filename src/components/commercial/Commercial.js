import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import commercial from "../../../assets/commercial.png";

function Commercial() {
  return (
    <View>
      <Text>Home page can be llllllllllllllllllllllllllll line next kadhe</Text>
      <Image
        source={commercial}
        style={{
          width: 420,
          height: 440,
          marginTop: 50,
        }}
      ></Image>
    </View>
  );
}

export default Commercial;
