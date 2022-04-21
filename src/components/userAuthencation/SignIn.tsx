import { StyleSheet, Text, TextInput, View, Platform } from "react-native";
import React, { useState } from "react";
import Buttons from "../Buttons";
import CheckBox from "@react-native-community/checkbox";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import authentication from "../../../Firebase";

const SignIns = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelect] = useState(false);

  const onSubmit = async function () {
    try {
      const apps = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );
      console.log(apps);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.root}>
      <Text style={{ marginBottom: 20 }}>SignIn</Text>
      <View style={styles.inputParents}>
        <TextInput
          placeholder="email"
          style={styles.inputs}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputParents}>
        <TextInput
          placeholder="password"
          style={styles.inputs}
          value={password}
          onChangeText={(text) => setPassword(text)}
          textContentType="newPassword"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.CheckParents}>
        {Platform.OS === "android" ? (
          <CheckBox
            value={isSelected}
            onValueChange={(select: boolean) => setSelect(select)}
          />
        ) : Platform.OS === "macos" ? null : (
          <input type="checkbox" />
        )}
        <Text> To Continue frist acepect our terms and condition</Text>
      </View>
      <Text>
        if you are not regestered user{" "}
        <Text
          style={{ color: "blue", fontWeight: "bold" }}
          onPress={() => navigation.navigate("signUp")}
        >
          signUp{" "}
        </Text>
        here
      </Text>
      <Buttons
        text="submit"
        onClick={onSubmit}
        height={40}
        color={"#fff"}
        bgColor={"darkgray"}
      />
    </View>
  );
};

export default SignIns;

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
  inputParents: {
    marginBottom: 20,
  },
  inputs: {
    borderWidth: 0,
    height: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    color: "black",
  },
  CheckParents: {
    flexDirection: "row",
    marginBottom: 5,
  },
});
