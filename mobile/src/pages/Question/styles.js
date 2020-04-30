import styled from "styled-components/native";
import Button from "../../components/Button";

import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const QuestionContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const QuestionView = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const QuestionText = styled.Text`
  text-align: justify;
  font-size: 14px;
  font-family: "montserrat-regular";
`;

export const AlternativeList = styled.FlatList`
  margin-top: 16px;
`;

export const Alternative = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  border: ${(props) => (props.isSelected ? "1px solid #211f30" : "none")};
  ${(props) =>
    props.isAnswered &&
    props.isCorrect && {
      background: "#72bc41",
      borderColor: props.isSelected ? "#367c2b" : "",
    }}

  ${(props) =>
    props.isAnswered &&
    !props.isCorrect && {
      background: "#ed3b31",
      borderColor: props.isSelected ? "#BA0021" : "",
    }}
`;

export const AnswerContainer = styled(LinearGradient).attrs({
  colors: ["#F7C659", "#FEA13A"],
})`
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SendButton = styled(Button)`
  margin: 10px 16px;
  flex-grow: 1;
`;

export const NextButton = styled(Button)`
  margin: 10px 16px;
  flex-grow: 1;
`;

export const ExplanationButton = styled(Button)`
  margin: 10px 16px;
  flex-grow: 1;
`;
