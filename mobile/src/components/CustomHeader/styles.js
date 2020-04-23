import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "powderblue",
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
