import React,{useState,useEffect}from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function CartScreen({ route }) {
    const [price, setPrice] = useState(false);
    useEffect(() => {
        if (route.variation === "true") {
            setPrice(route.price_variation[0])
        }
        
    }, [])
    return (
        <View >
            {
                route.params.cart.map((item, index) => {
                    return (
                        <View style={styles.container}  key={item.id}>
                            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16, color: "#828282", padding: 10 }}>Shop Details</Text>
                            <View style={{ flexDirection: "row" }}>
                                <View >
                                    <Image source={{ uri: item.img_url }}
                                        style={styles.cartImage} />
                                </View>
                                <View>
                                    <Text style={{ fontFamily: "Poppins-Bold", fontSize: 16, color: "black", }}>{route.params.result.Restaurant_name}</Text>
                                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16, color: "#828282", marginHorizontal: 4 }}>{route.params.result.special}</Text>
                                </View>
                            </View>
                            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16, color: "#828282", padding: 10 }}>Items Added</Text>
                            <View style={styles.cartContainer}>
                                <Text style={{fontFamily:"Poppins-SemiBold",fontSize:14,padding:10}}>{item.category_name}</Text>
                                <View style={{ flexDirection:"row"}}>
                                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color: "#828282",padding:10 }}>{item.quantity} * ₹{item.price}</Text> 
                                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 14, color: "black",padding:7 }}>{route.params.totalPrice}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    );


}
const styles = StyleSheet.create({
    cartImage: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 15,
        borderColor: "#CBA960"
    },
    container: {
        backgroundColor: "#FFF8E8",
        height: "100%",
    },
    cartContainer:{
        borderColor:"#0000000D",
        borderWidth:1,
        height:80,
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:10,
       
    }
})