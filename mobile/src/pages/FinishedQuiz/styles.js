import styled from "styled-components/native";
import { color } from "../../styles/global";
import QuizCard from "../../components/QuizCard";

export const Container = styled.View`
  flex: 1;
  background-color: ${color.g1};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const FinishedCard = styled(QuizCard)`
  background: ${color.defaultButtonColor};
  height: 70px;
`;
