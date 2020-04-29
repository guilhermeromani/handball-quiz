import React, { forwardRef } from "react";
import { PropTypes } from "prop-types";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, TInput } from "./styles";

const Input = forwardRef(({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
      {icon && (
        <MaterialIcons name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />
      )}
      <TInput {...rest} ref={ref}></TInput>
    </Container>
  );
});

Input.prototype = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default Input;
