import React, { useState, useRef } from "react";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../../assets/logo.png";

import Background from "../../components/Background";
import { signInRequest } from "../../store/modules/auth/actions";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from "./styles";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();
  const passwordRef = useRef();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            ref={passwordRef}
            icon="lock-outline"
            placeholder="Sua senha secreta"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            underlineColorAndroid="transparent"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>Entrar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate("SignUp")}>
          <SignLinkText>Crie sua conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
