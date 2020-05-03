import styled from "styled-components/native";
import { color, font } from "../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  height: 46px;
  background: ${color.defaultButtonColor};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: ${font.bold};
  color: ${color.defaultButtonTextColor};
  font-size: 16px;
`;

export const Icon = styled(MaterialIcons)`
  padding: 5px;
`;
