import "react-native-gesture-handler";
import React from "react";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";

import "./src/config/ReactotronConfig";
import { store, persistor } from "./src/store";

import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#F7C659" />
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
  return null;
}
