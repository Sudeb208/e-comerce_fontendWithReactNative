import { TextInput, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const {width, height} = Dimensions.get('window')
const Search = () => {
    const [active, setActive] = useState(false)
    console.log(active);
    
    return (
        <View style={styles.root}>
            {/* part1 */}
            <View style={[styles.searchPart, {width: width - 100}]}>
                <TextInput style={[styles.input, {borderColor: active ? 'green' : '#626166'}]} onFocus={()=> setActive(true)} />
                <FontAwesome name='search' style={styles.searchIcon} color="#fff" />
            </View>
            <View style={styles.savePost}>
                <FontAwesome name="heart" style={styles.heart} size={16} color='#626166' />
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    root: {
        marginHorizontal: 20,
        marginBottom: 10,
        flexDirection: "row"
    },
    searchPart:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    input:{
        borderColor: '#626166',
        height: 40,
        borderRadius: 5,
        width: '100%',
        
    },
    searchIcon:{
        position: 'absolute',
        backgroundColor: '#348063',
        right: 0,
        padding: 14,
        borderTopRightRadius: 5,
        borderBottomEndRadius: 5
    },
    savePost:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 60
    },
    heart:{
        borderWidth: 1,
        padding: 10,
        borderRadius: 50
    }
});
