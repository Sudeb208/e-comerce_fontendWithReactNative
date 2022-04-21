import { Alert, Button, ScrollView, ScrollViewComponent, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import countryList from "country-list";
import styles from "./style";

const Adress = ({ navigation, route }: any) => {
    const countries = countryList.getData();
    const [country, setContry] = useState(countries[0].code);
    const [fullName, setFullName] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [state, setState] = useState("");
    const [fullNameError, setFullNameError] = useState("");

    console.log(fullNameError);
    console.log(route.params);
    
    
    const ButtonPress = () => {
        if (!fullName) {
            console.log("full name is emty");
            setFullNameError("full name is empty");
            return;
        }
        console.log(fullName.length);
    };
    console.log(fullName.length < 3);
    const fullNameFunction = () => {
        if (fullName.length < 3) {
            setFullNameError("name is too short");
        }
        if (fullName.length > 15) {
            setFullNameError("name is too long");
        }
    };

    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            <Picker
                style={{ height: 50, borderWidth: 1, borderColor: "lightgray" }}
                selectedValue={country}
                onValueChange={(value) => setContry(value)}
                dropdownIconColor=""
            >
                {countries.map((country: any) => (
                    <Picker.Item
                        value={country.code}
                        key={country.code}
                        label={country.name}
                    />
                ))}
            </Picker>
            <View style={styles.fullName}>
                <Text>Full Name (frist name and last name)</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={fullName}
                    onChangeText={(text) => {
                        fullName.length < 3
                            ? setFullNameError("name is too short")
                            : fullName.length > 15
                            ? setFullNameError("name is too long")
                            : setFullNameError("");
                        setFullName(text);
                    }}
                    placeholder="full name"
                    onEndEditing={fullNameFunction}
                />
                {fullNameError ? (
                    <Text style={{ color: "red" }}>{fullName.length < 3 ? fullNameError : ''}</Text>
                ) : null}
            </View>
            <View style={styles.fullName}>
                <Text>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={phoneNumber}
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                    }}
                    placeholder="full name"
                    keyboardType="number-pad"
                />
            </View>
            <View style={styles.fullName}>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={email}
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                    placeholder="full name"
                    keyboardType="number-pad"
                />
            </View>
            <View style={styles.fullName}>
                <Text>Address</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={adress}
                    onChangeText={(text) => {
                        setAdress(text);
                    }}
                    placeholder="full name"
                    keyboardType="number-pad"
                />
            </View>
            <View style={styles.row}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Text> State</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "lightgray",
                            justifyContent: "center",
                        }}
                    >
                        <Picker
                            style={{ height: 40, borderRadius: 3 }}
                            selectedValue={country}
                            onValueChange={(value) => setContry(value)}
                        >
                            <Picker.Item value={"dhaka"} label={"dhaka"} />
                        </Picker>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Address</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={adress}
                        onChangeText={(text) => {
                            setAdress(text);
                        }}
                        placeholder="full name"
                        keyboardType="number-pad"
                    />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Button onPress={ButtonPress} title="submit" />
            </View>
        </ScrollView>
    );
};

export default Adress;
