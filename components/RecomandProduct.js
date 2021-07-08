import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';





export default function RecomandProduct(props) {
    const [price, setPrice] = useState(false);
    const [quantity, setQuantity] = useState(0)


    useEffect(() => {
        if (props.variation === "true") {
            setPrice(props.price_variation[0])
        }
        // console.log(props.price_variation);
    }, [])

    const incrementAction = () => {
        // console.log('Update Triggerd')
        // console.log(props.id)
        props.updateCart(props.id)
    }

    useEffect(() => {
        console.log('Cart Updated')
        let isInCart = props.cart.find(item => item.id === props.id)
        if (isInCart) {
            setQuantity(isInCart.quantity)
        }
    }, [props.cart])


    return (
        <View style={styles.container}>
            <View style={styles.productLayout}>
                <View style={styles.recomandProduct}>
                    <Image
                        source={{ uri: props.recomendImage }}
                        style={styles.recomendImage} />
                    <View>
                        <Text style={styles.category_name}>{props.category_name}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Image source={require('../assets/picture.png')}
                                    style={{ width: 12, height: 12, marginVertical: 10 }} />
                            </View>
                            <View>
                                <Text style={styles.descriptionText}>{props.description}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.amount}>₹{price.amount}</Text>
                            <Text style={styles.demoamount}>₹{price.demo_amount}</Text>
                        </View>
                    </View>
                    <AddQuantity quantity={quantity} incrementAction={incrementAction} />
                </View>

            </View>
        </View>
    )
}




const AddQuantity = (props) => {
    return (
        <View style={styles.addquantity}>
            {props.quantity > 0 ? (
                <View style={{ flexDirection: "row", position: "absolute" }}>
                    <Pressable >
                        <Icon name="remove-outline" size={30} color="#FFFFFF"
                            style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
                    </Pressable>
                    <Text style={styles.quantitytext}>{props.quantity}</Text>
                    <View style={styles.plus}>
                        <Pressable onPress={props.incrementAction}>
                            <Icon name="add-outline" size={30} color="#FFFFFF"
                                style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
                        </Pressable>
                    </View>
                </View>

            ) : (

                <View style={styles.plus}>
                    <Pressable onPress={props.incrementAction}>
                        <Icon name="add-outline" size={30} color="#FFFFFF"
                            style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
                    </Pressable>
                </View>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF8E8",
    },
    recomandProduct: {
        paddingVertical: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#0000000D"

    },
    recomendImage: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: "#C39E50",
        marginHorizontal: 10,
        borderRadius: 10,
    },
    productLayout: {
        borderColor: "#FFFFFF",
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    category_name: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        color: "#000000"
    },
    descriptionText: {
        color: "#828282",
        fontSize: 10,
        marginVertical: 9,
        marginHorizontal: 5,
        fontFamily: "Poppins-Regular"
    },
    addquantity: {
        marginTop: 60,
    },
    plus: {
        marginHorizontal: 70,
        position: "absolute",

    },
    plus1: {
        marginHorizontal: 70,
        marginHorizontal: 70,
        position: "absolute"
    },
    quantitytext: {
        fontSize: 14,
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
        marginHorizontal: 12,
        marginVertical: 6
    },
    amount: {
        color: "black",
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
        padding: 5,

    },
    demoamount: {
        color: "black",
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        padding: 5,
        marginVertical: 4,
        textDecorationLine: 'line-through'
    }
})