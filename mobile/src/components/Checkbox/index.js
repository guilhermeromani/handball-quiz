import React from "react";
import { Feather } from "@expo/vector-icons";

import { CheckBoxButton, CheckBoxText } from "./styles";

export default function CheckBox({
  selected,
  onPress,
  answered = false,
  size = 30,
  color = "#211f30",
  text = "",
  ...props
}) {
  return (
    <CheckBoxButton onPress={onPress} {...props}>
      <Feather
        style={{ paddingRight: 5 }}
        size={size}
        color={ answered ? '#fff' : color }
        name={selected ? "check-square" : "square"}
      />
      <CheckBoxText isSelected={selected} isAnswered={answered}>
        {text}
      </CheckBoxText>
    </CheckBoxButton>
  );
}
