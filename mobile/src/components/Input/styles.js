import styled from "styled-components";
import { color, font } from "../../styles/global";

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: ${color.backgroundView};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: color.placeholder,
})`
  flex: 1;
  font-family: ${font.regular};
  font-size: ${font.inputTextSize};
  margin-left: 10px;
  color: ${color.inputTextColor};
`;
