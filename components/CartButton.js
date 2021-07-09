import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function CartButton(props) {
    return (
        <View style={styles.container}>
            <View>
                 <Text style={styles.cartItemCount}>{props.cart.quantity}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
container:{
    backgroundColor:"black",
    height:50,
    borderWidth:1,
    marginHorizontal:10,
    borderRadius:10,
    position:"absolute",
    bottom:0,
    width:"95%"
} ,
cartItemCount:{
    fontFamily:"Poppins-Regular",
    fontSize:12,
    color:"#FFEAC0",
    padding:15
}
})