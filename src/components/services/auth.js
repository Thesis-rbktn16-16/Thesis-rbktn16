import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_URL } from "./env";

export const TOKEN_KEY = "@Jwt:token";

export const signUp = async ({ fullname, email, password }) => {
  const response = await axios.post(`${BASE_URL}user`, {
    fullName: fullname,
    email: email,
    password: password,
  });
};

export const signIn = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}user/login`, {
    email: email,
    password: password,
  });

  await AsyncStorage.setItem("@Jwt:token", response.data.accessToken);
};

export const signOut = () => {
  AsyncStorage.removeItem(TOKEN_KEY);
};

export const getToken = async () => {
  return await AsyncStorage.getItem("@Jwt:token");
};

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token !== null ? true : false;
};
