import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AuthLayout from "../components/auth/AuthLayout";
import { colors } from "../colors";
import AuthButton from "../components/auth/AuthButton";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");
  return (
    <AuthLayout>
      <AuthButton
        disabled={false}
        onPress={goToCreateAccount}
        text="Create New Account"
      />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
