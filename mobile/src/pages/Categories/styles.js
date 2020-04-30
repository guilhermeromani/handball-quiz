import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #747380;
`;

export const CategoryList = styled.FlatList`
  margin-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Category = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: #e02041;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

export const StartButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
