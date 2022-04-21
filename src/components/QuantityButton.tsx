import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface props  {
    quantity: Number,
    setQuantity: (value: any)=> void

}
const QuantityButton = (props: props) => {
     const{quantity, setQuantity} =props
  return (
    <View style={styles.quantityRow}>
                <TouchableOpacity
                    onPress={() => setQuantity(Math.max(1, Number(quantity) - 1))}
                    style={styles.quantityButton}
                >
                    <Text style={{ fontSize: 20 }}>-</Text>
                </TouchableOpacity>
                <View style={styles.quantity}>
                    <Text style={styles.quantity}>{quantity}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => setQuantity(Number(quantity) + 1)}
                    style={styles.quantityButton}
                >
                    <Text style={{ fontSize: 20 }}>+</Text>
                </TouchableOpacity>
            </View>
  )
}
const styles = StyleSheet.create({
    quantityRow: {
        flexDirection: "row",
        backgroundColor: "#dedede",
        borderWidth: 0.5,
        borderColor: "#fff",
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    quantityButton: {
        backgroundColor: "#b1e9cfa9",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
    },
    quantity: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        fontSize: 18,
        color: "#5350e6",
    },
})

export default QuantityButton