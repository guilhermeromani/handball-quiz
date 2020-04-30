import React from "react";

import {
  Container,
  ScrollContainer,
  RuleTitle,
  RuleDescription,
} from "./styles";

export default function Explanation({ route, navigation }) {
  const { rules } = route.params;

  return (
    <Container>
      <ScrollContainer>
        <RuleTitle>Regra: {rules.number}</RuleTitle>
        <RuleDescription>{rules.text}</RuleDescription>
      </ScrollContainer>
    </Container>
  );
}
