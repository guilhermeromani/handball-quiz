import React from "react";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import { Container, Text, Icon } from "./styles";

export default function Button({ children, icon, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {icon && <Icon name={icon} size={25} color="#fff" />}
          <Text>{children}</Text>
        </>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  icon: null,
};
