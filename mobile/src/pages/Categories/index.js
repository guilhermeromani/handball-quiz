import React, { useState, useEffect } from "react";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import CheckBox from "../../components/Checkbox";

import api from "../../services/api";

import { setCurrentQuiz } from "../../store/modules/quiz/actions";

import {
  Container,
  Category,
  CategoryList,
  StartButton,
  StartButtonText,
} from "./styles";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function loadCategories() {
    const response = await api.get("categories");
    setCategories(
      response.data.filter((item) => {
        return item.type == "default";
      })
    );
  }

  function handleCheck(category) {
    var index = selectedCategories.findIndex((item) => item == category._id);
    if (index == -1) {
      setSelectedCategories([...selectedCategories, category._id]);
    } else {
      var array = [...selectedCategories];
      array.splice(index, 1);
      setSelectedCategories(array);
    }
  }

  function isSelected(category) {
    var index = selectedCategories.findIndex((item) => item == category._id);
    return index != -1;
  }

  async function handleStart() {
    await api
      .post("quiz", { category_ids: selectedCategories })
      .then((response) => {
        dispatch(setCurrentQuiz(response.data));
        navigation.navigate("Question");
      });
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Container>
      <CategoryList
        data={categories}
        keyExtractor={(category) => String(category._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: category }) => (
          <Category>
            <CheckBox
              text={`${category.number}. ${category.description}`}
              selected={isSelected(category)}
              onPress={() => handleCheck(category)}
            />
          </Category>
        )}
      />
      <StartButton onPress={handleStart}>
        <StartButtonText>Iniciar</StartButtonText>
      </StartButton>
    </Container>
  );
}
