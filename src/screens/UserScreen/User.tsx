import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignIns from "../../components/userAuthencation/SignIn";

const User = ({ navigation }: any) => {
  return (
    <View>
      <SignIns navigation={navigation} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
