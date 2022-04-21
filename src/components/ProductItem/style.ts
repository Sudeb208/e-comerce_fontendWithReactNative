import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderRadius: 5,
        backgroundColor: "#fff",
        width: "100%",
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: "contain",
        marginHorizontal: 10
    },
    title: {
        width: "100%",
        fontSize: 18,
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    page: {
        width: "100%",
        padding: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
    },oldPrice:{
        fontSize: 12,
        fontWeight:'normal',
        textDecorationLine: 'line-through'
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems:'center',
        marginVertical: 10
    },
    star: {
        marginRight: 2
    },
    row: {
        flexDirection: 'column'
    }
});
export default styles