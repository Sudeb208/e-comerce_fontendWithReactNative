import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../components/userAuthencation/SignIn";
import User from "../screens/UserScreen/User";
import SignUp from "../components/userAuthencation/SignUp";

const UserStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="signUp" component={SignUp} />
      </Stack.Navigator>
    </View>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
