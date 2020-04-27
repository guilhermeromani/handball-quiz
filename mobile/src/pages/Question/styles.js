import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
`;

export const QuestionView = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  margin-top: 24px;
`;

export const QuestionText = styled.Text`
  font-size: 15px;
`;

export const AlternativeList = styled.FlatList`
  margin-top: 32px;
`;

export const Alternative = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const AnswerBox = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Answer = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const AnswerText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
