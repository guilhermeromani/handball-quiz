import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
`;

export const NewQuizButton = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  height: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NewQuizButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
`;
