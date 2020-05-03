import React from "react";
import { Avatar } from "react-native-elements";

import { Container, Header, UserName } from "./styles";

export default function CustomHeader({ navigation }) {
  function handleEdit() {
    navigation.navigate("Profile");
  }

  return (
    <Container>
      <Header>
        <UserName>Olá Guilherme</UserName>
        <Avatar
          rounded
          size="medium"
          title="GR"
          showAccessory
          onPress={handleEdit}
          activeOpacity={0.7}
        />
      </Header>
    </Container>
  );
}
