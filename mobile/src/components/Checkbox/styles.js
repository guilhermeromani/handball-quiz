import styled from "styled-components/native";

export const CheckBoxButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxText = styled.Text`
  font-size: 14px;
  font-family: ${(props) =>
    props.isSelected ? "montserrat-bold" : "montserrat-regular"};
  color: ${(props) => (props.isAnswered ? "#fff" : "black")};
`;
