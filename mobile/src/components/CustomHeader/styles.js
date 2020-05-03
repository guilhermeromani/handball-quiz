import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { color, font } from "../../styles/global";

export const Container = styled(LinearGradient).attrs({
  colors: [color.g1, color.g2],
})`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.Text`
  font-family: ${font.regular};
  font-size: ${font.defaultTextSize};
  color: ${color.defaultTextColor};
`;
