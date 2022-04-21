import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "../../components/ProductItem";
import QuantityButton from "../../components/QuantityButton";
import Buttons from "../../components/Buttons";
import ThemeContext from "../../context/themeContext";
const cartItem = [
    {
        id: 1,
        quantity: 2,
        items: {
            rating: [3.0, 120],
            price: 30,
            oldPrice: 40,
            title: "stylies shoe for man ",
            description:
                "If you want to open/close picker programmatically on android (available from version 1.16.0+), pass ref to PickerIf you want to open/close picker programmatically on android (available from version 1.16.0+), pass ref to Picker",
            productColor: ["black", "red", "blue"],
            images: [
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
            ],
        },
    },
    {
        id: 2,
        quantity: 2,
        items: {
            rating: [3.0, 120],
            price: 30,
            oldPrice: 40,
            title: "stylies shoe for man ",
            description:
                "If you want to open/close picker programmatically on android (available from version 1.16.0+), pass ref to PickerIf you want to open/close picker programmatically on android (available from version 1.16.0+), pass ref to Picker",
            productColor: ["black", "red", "blue"],
            images: [
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
            ],
        },
    },
    {
        id: 3,
        quantity: 2,
        items: {
            rating: [3.0, 120],
            price: 30,
            oldPrice: 40,
            title: "stylies shoe for man ",
            description:
                "If you want to open/close picker programmatically on android (available from version 1.16.0+), pass ref to PickerIf you want to open/close picker programmatically on android (available from version 1.16.0+), pass ref to Picker",
            productColor: ["black", "red", "blue"],
            images: [
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
            ],
        },
    },
    {
        id: 4,
        quantity: 2,
        items: {
            rating: [4.0, 120],
            price: 30,
            oldPrice: 40,
            title: "stylies shoe for man ",
            description:
                "If you want to open/close picker programmatically on android (available from version 1.16.0+), pass ref to PickerIf you want to open/close picker programmatically on android (available from version 1.16.0+), pass ref to Picker",
            productColor: ["black", "red", "blue"],
            images: [
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/714/857/krp94sw0/shoe/s/c/n/8-6g-829-campus-blue-horizon-r-slate-original-imag5fqghzwhgbed.jpeg?q=50",
            ],
        },
    },
];
const total = cartItem.reduce((total, num) =>  total + num.items.price * num.quantity , 0,
);
const CartScreen = ({navigation} : any) => {
    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <Text style={{ fontSize: 16 }} lineBreakMode={'clip'}>
                    you have {cartItem.length} product in your cart
                    <Text> tital Price:  {total.toFixed(2)}</Text>
                </Text>
                
                <ThemeContext.Consumer>
                {(value: Object)=> <Buttons
                    text="Process to pay"
                    onClick={() => navigation.navigate('adress')
                    }
                    width={400}
                    height={40}
                    color={value}
                />}
                </ThemeContext.Consumer>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
            {cartItem.map((item) => (
                    <ProductItem 
                    key={item.id}
                        title={item.items.title}
                        rating={item.items.rating}
                        src={item.items.images[0]}
                        price={item.items.price}
                        oldPrice={item.items.oldPrice}
                        cart={true}
                    />
            ))}
            </ScrollView>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    root: {
        width: "100%",
        padding: 10,
        paddingTop: 30,
        backgroundColor: "#d2d2d2",
        height: "100%",
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
    },
});
