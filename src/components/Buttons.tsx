import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
interface items {
    text: string;
    onClick: Function;
    width?: number;
    height?: number;
    color?: string;
    bgColor?: any;
}
const Buttons = ({ text, onClick, width, height, color, bgColor }: items) => {
    return (
        <View
            style={styles.Buttons}
            
        >
            <TouchableOpacity
                style={[
                    styles.addToCart,
                    {
                        width: width ? width  : "100%",
                        height: height && height,
                        backgroundColor: bgColor ? bgColor : 'rgb(153, 101, 58)'
                    },
                ]}
                onPress={()=> onClick()}
            >
                <Text style={{ fontSize: 20, color: color ? color: 'black' }}> {text}</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    addToCart: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 5,
    },
    Buttons: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
});

export default Buttons;
