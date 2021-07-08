import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function CartScreen() {
    return (
        <View style={styles.container}>
            <View>
                 <Text>Hii</Text>
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
    bottom:15,
    width:"95%"
} 
})