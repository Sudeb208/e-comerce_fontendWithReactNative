import { View, Text, Image } from "react-native";
import React, { useState, useMemo } from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";
import QuantityButton from "../QuantityButton";
import { useRoute } from "@react-navigation/native";

interface item {
    title: string;
    rating: number[];
    src: String;
    price: number;
    oldPrice?: number;
    cart?: boolean;
    onPress?: any;
}
const ProductItem = ({ title, rating, src, price, oldPrice, cart, onPress, }: item) => {
    console.log("hello");
    
    const [quantity, setQuantity] = useState(1);

    const [averageRating, ratingNumber] = rating;
    return (
        <View style={styles.row}>
            <View style={styles.root}>
                <Image
                    style={styles.image}
                    source={{
                        uri: String(src),
                    }}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>
                        {title}
                    </Text>
                    {/* rating  */}
                    <View style={styles.ratingContainer}>
                        {[0, 0, 0, 0, 0].map((item, index) => (
                            <FontAwesome
                                name={
                                    index < Math.floor(Number(averageRating))
                                        ? "star"
                                        : index < averageRating &&
                                          Number(averageRating) -
                                              Math.floor(
                                                  Number(averageRating)
                                              ) >
                                              0
                                        ? "star-half-full"
                                        : "star-o"
                                }
                                style={styles.star}
                                size={18}
                                color={"#e47911"}
                                key={index}
                            />
                        ))}
                        <Text>{ratingNumber}</Text>
                    </View>
                    <Text style={styles.price}>
                        from ${price}
                        {oldPrice && (
                            <Text style={styles.oldPrice}>${oldPrice}</Text>
                        )}
                    </Text>
                </View>
            </View>
            {cart ? (
                <QuantityButton quantity={quantity} setQuantity={setQuantity} />
            ) : null}
        </View>
    );
};

export default React.memo(ProductItem);
