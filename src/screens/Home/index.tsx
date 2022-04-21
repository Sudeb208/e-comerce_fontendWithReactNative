import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import ProductItem from "../../components/ProductItem";

const HomeScreen = ({ navigation }: any) => {
    const navigator = useNavigation();
    console.log(navigator);

    return (
        <ScrollView style={styles.page}>
            <View style={styles.ProductItem}>
                <ProductItem
                    title="VIBGYOR Running Shoes For Men  (Blue)"
                    src="https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50"
                    rating={[3.0, 120]}
                    price={30}
                    oldPrice={40}
                />
            </View>
            <View style={styles.ProductItem}>
                <ProductItem
                    title="VIBGYOR Running Shoes For Men  (Blue)"
                    src="https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50"
                    rating={[3.2, 120]}
                    price={30}
                    oldPrice={40}
                />
            </View>
            <View
                style={styles.ProductItem}
                onStartShouldSetResponder={() =>
                    navigation.navigate("ProductItem", { itemId: 23, name: 'sudeb' })
                }
            >
                <ProductItem
                    title="VIBGYOR Running Shoes For Men  (Blue)"
                    src="https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50"
                    rating={[4.2, 120]}
                    price={30}
                    oldPrice={40}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    page: {
        width: "100%",
        padding: 10,
        paddingTop: 30,
        backgroundColor: "#d2d2d2",
        height: "100%",
        flex: 1,
    },
    ProductItem: {
        marginVertical: 5,
    },
});

export default HomeScreen;
