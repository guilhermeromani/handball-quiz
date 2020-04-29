import React from "react";
import { View } from "react-native";
import { Text, Divider, Avatar } from "react-native-elements";

import Background from "../Background";

import styles from "./styles";

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá Guilherme</Text>
        <Avatar rounded size="medium" title="GR" />
      </View>
    </View>
  );
}
