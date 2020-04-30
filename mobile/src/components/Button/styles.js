import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  height: 46px;
  background: #3b9eff;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: "montserrat-bold";
  color: #fff;
  font-size: 16px;
`;

export const Icon = styled(MaterialIcons)`
  padding: 5px;
`;