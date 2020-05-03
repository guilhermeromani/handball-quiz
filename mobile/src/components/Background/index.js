import { LinearGradient } from "expo-linear-gradient";
import { color } from "../../styles/global";
import styled from "styled-components/native";

export default styled(LinearGradient).attrs({
  colors: [color.g1, color.g2],
})`
  flex: 1;
`;
