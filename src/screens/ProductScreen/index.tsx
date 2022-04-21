import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import QuantityButton from "../../components/QuantityButton";
import ProductItem from "../../components/ProductItem";
import Buttons from "../../components/Buttons";

const productItem = {
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
};

const { width, height } = Dimensions.get("window");

const ProductScreen = ({ route }: any) => {
  const [selectColor, setSelectColor] = useState(
    productItem.productColor ? productItem.productColor[0] : null
  );
  const [quantity, setQuantity] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  console.log(selectColor);

  const onFlatListUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  }, []);

  return (
    <View style={styles.root}>
      {/* title */}
      <Text>{productItem.title}</Text>
      {/* IMAGE CURCEL */}
      <View style={{ marginVertical: 10 }}>
        <FlatList
          data={productItem.images}
          renderItem={(data) => (
            <Image
              style={[styles.Image, { width: width - 20 }]}
              source={{ uri: data.item }}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 20}
          snapToStart={true}
          decelerationRate={"normal"}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
          onViewableItemsChanged={onFlatListUpdate}
        />
      </View>
      {/* dott for picture */}
      <View style={styles.dots}>
        {productItem.images.map((items, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? "#c9c9c9" : "white",
              },
            ]}
          />
        ))}
      </View>
      {/* description  */}
      <Text>{productItem.description}</Text>

      {/* Picker  */}
      <Picker
        selectedValue={selectColor}
        onValueChange={(item) => setSelectColor(item)}
      >
        {productItem.productColor.map((item, index) => (
          <Picker.Item label={item} value={item} key={index} />
        ))}
      </Picker>
      {/* quantity */}
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      {/* buttton  */}
      <Buttons
        text="add to cart"
        onClick={() => console.log("hello")}
        width={width}
        height={20}
      />
      <Buttons
        text="Buy Now"
        onClick={() => console.log("hello")}
        width={width}
        height={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 10,
    paddingTop: 30,
    backgroundColor: "#d2d2d2",
    height: "100%",
  },
  Image: {
    height: 300,
    backgroundColor: "#fff",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#4e424beb",
    marginHorizontal: 3,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default ProductScreen;
