import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Avatar, ListItem } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

import styles from "./styles";

export default function QuizCard({
  currentQuiz,
  currentScore,
  answeredQuestions,
  totalQuestions,
  ...props
}) {
  const route = useRoute();
  const navigation = useNavigation();

  const [colorStart, setColorStart] = useState([0, 0]);
  const [colorEnd, setColorEnd] = useState([0, 0]);

  function setColors() {
    setColorStart(calculateStartColor());
    setColorEnd(calculateEndColor());
  }

  function calculateStartColor() {
    let result = formatSlider(answeredQuestions, totalQuestions);
    if (result > 0 && result < 1) return [result - 0.1, 0];
    else if (result == 1) return [0.98, 0];
    else return [0, 0];
  }

  function calculateEndColor() {
    let result = formatSlider(answeredQuestions, totalQuestions);
    if (result != 0) return [result, 0];
    else return [0.1, 0];
  }

  function formatSlider(current, total, minimum = 0, maximum = 1) {
    let v = 0;
    if (total > 0) {
      v = Math.round((current / total) * 100) / 100;
      if (v > 1) v = Math.min(maximum, Math.max(minimum, v));
    }
    return v;
  }

  useEffect(() => {
    setColors();
  }, []);

  return (
    <ListItem
      Component={TouchableOpacity}
      friction={90}
      tension={100}
      activeScale={0.95}
      containerStyle={styles.card}
      linearGradientProps={{
        // colors: ["#FF9800", "#F44336"],
        colors: ["#0396FF", "#ABDCFF"],
        start: colorStart,
        end: colorEnd,
      }}
      ViewComponent={LinearGradient}
      leftAvatar={<Avatar rounded size="medium" title={String(currentScore)} />}
      title="Chris Jackson"
      titleStyle={{ color: "white", fontWeight: "bold" }}
      subtitleStyle={{ color: "white" }}
      subtitle="Vice Chairman"
      chevron={{ color: "white" }}
      badge={{
        value: `${answeredQuestions}/${totalQuestions}`,
        // textStyle: { color: "orange" },
        // containerStyle: { marginTop: -20 },
      }}
      onPress={() =>
        navigation.navigate("Question", {
          currentQuiz: currentQuiz,
        })
      }
    />
  );
}
