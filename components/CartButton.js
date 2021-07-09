import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function CartButton(props) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.cartItemCount}>{props.cart.length} items</Text>
                <View>
                    <Text style={styles.cartItemPrice}>₹{props.totalPrice}</Text>
                </View>
            </View>
            <Pressable onPress={() => props.navigation.navigate('cartScreen')}>
                <View style={styles.viewCartTab}>
                    <Text style={styles.viewCart}>View Cart</Text>
                    <Icon name="cart" size={30} color="#CBA960" />
                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 50,
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",

    },
    cartItemCount: {
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        color: "#CBA960",
        padding: 15
    },
    cartItemPrice: {
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        color: "#FFEAC0",
        padding: 12,
    },
    viewCart: {
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        color: "#CBA960",
        padding: 5,
        marginHorizontal: 18
    },
    viewCartTab: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flexGrow: 1,
        borderWidth: 1,
        borderColor: "#FFEAC0",
        borderRadius: 10,
        height: 35,
        marginVertical: 5,
        marginHorizontal: 55,

    }
})