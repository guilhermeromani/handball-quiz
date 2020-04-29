import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffdffd;
`;

export const Header = styled.View`
  flex: 1;
  
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#F7C659",
    paddingBottom: 40,
  },

  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 15,
    color: "#737380",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  number: {
    fontSize: 18,
    color: "#fff",
    textTransform: "capitalize",
  },

  result: {
    fontSize: 18,
    color: "#fff",
    textTransform: "capitalize",
  },

  containerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerBot: {
    flexDirection: "row",
    justifyContent: "center",
  },

  divider: {
    backgroundColor: "#dfe6e9",
    marginVertical: 20,
  },

  category: {
    fontSize: 18,
    color: "#fff",
  },
});
