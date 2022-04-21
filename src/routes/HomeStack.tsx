import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/ProductScreen";
import HomeScreen from "../screens/Home";
import Adress from "../screens/Adress";
import SignUp from "../components/userAuthencation/SignUp";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="homeScreen" component={HomeScreen} />
                <Stack.Screen name="ProductItem" component={ProductScreen} />
                <Stack.Screen
                    name="adress"
                    component={Adress}
                    // options={{
                    //     tabBarIcon: ({ color, size }: any) => (
                    //         <FontAwesome
                    //             name="search"
                    //             color={color}
                    //             size={20}
                    //         />
                    //     ),
                    // }}
                />
                <Stack.Screen name="signup" component={SignUp} />
            </Stack.Navigator>
        </View>
    );
};

export default HomeStack;
