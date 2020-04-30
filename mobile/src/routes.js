import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomHeader from "./components/CustomHeader";
import { Button, Alert } from "react-native";
import { useSelector } from "react-redux";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OngoingQuiz from "./pages/OngoingQuiz";
import FinishedQuiz from "./pages/FinishedQuiz";
import Categories from "./pages/Categories";
import Question from "./pages/Question";
import Explanation from "./pages/Explanation";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function QuizzesTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12, fontFamily: "montserrat-regular" },
        style: { backgroundColor: "#FEA13A" },
        activeTintColor: "#fff",
        inactiveTintColor: "gray",
        indicatorStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen name="Em Andamento" component={OngoingQuiz} />
      <Tab.Screen name="Finalizados" component={FinishedQuiz} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                header: ({ scene, previous, navigation }) => (
                  <CustomHeader
                    scene={scene}
                    previous={previous}
                    navigation={navigation}
                  />
                ),
              }}
              component={QuizzesTabs}
            />
            <Stack.Screen
              name="Categories"
              options={{ headerTitle: "Categorias" }}
              component={Categories}
            />
            <Stack.Screen
              name="Question"
              component={Question}
              options={({ navigation, route }) => ({
                headerLeft: null,
                title: "",
                headerRight: () => (
                  <Button
                    onPress={() =>
                      Alert.alert(
                        "Voltar para o início?",
                        "Seu progresso até aqui não será perdido.",
                        [
                          {
                            text: "Não, vamos continuar",
                          },
                          {
                            text: "Sim, quero voltar",
                            onPress: () => {
                              navigation.navigate("Home");
                            },
                          },
                        ],
                        { cancelable: true }
                      )
                    }
                    title="Info"
                    color="#fff"
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Explanation"
              component={Explanation}
              model="modal"
              options={{
                title: "Explicação",
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.ModalPresentationIOS,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              options={{ headerShown: false }}
              component={SignIn}
            />
            <Stack.Screen
              name="SignUp"
              options={{ headerShown: false }}
              component={SignUp}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
