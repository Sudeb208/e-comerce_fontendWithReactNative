import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
    const [search, setSearch] = useState("");
    return (
        <SafeAreaView style={styles.header}>
            <FontAwesome5 style={{ marginLeft: 10 }} name="search" color='lightgray' size={20} />
            <TextInput
                style={styles.textInput}
                placeholder={"search..."}
                onChangeText={(text) => setSearch(text)}
                value={search}
            />
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        margin: 20,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
    },
    textInput: {
        marginLeft: 10,
        height: 40,
        width: '100%'
    },
});
