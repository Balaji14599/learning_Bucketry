import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function StoreInformation(props) {
    // console.log(props)
    return (
        <View>
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: props.image }}
                    style={styles.image} />
            </View>
            <View style={{ flex: 1, marginRight: 10 }}>
                <View>
                    <Text style={styles.ResName}>{props.ResName}</Text>
                    <View>
                        <Text style={styles.special}>{props.special}</Text>
                    </View>
                    <View style={styles.HorLine}>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Icon name="star" size={12} color="#CBA960"
                            style={styles.staricon} />
                    </View>
                    <View>
                        <Text style={styles.rating}>{props.rating}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}> 
                            <View style={{backgroundColor:"#828282",borderWidth:2,height:4,width:4,marginHorizontal:12,
                             marginVertical:12,borderColor:"#828282",borderRadius:10}}></View>
                            <Text style={styles.place}>{props.place}</Text>
                            <View style={{backgroundColor:"#828282",borderWidth:2,height:4,width:4,marginHorizontal:18,
                             marginVertical:12,borderColor:"#828282",borderRadius:10}}></View>
                            <Text style={styles.place}>{props.distance}</Text><Text style={{fontFamily:"Poppins-Redium",fontSize:12,color:"#CBA960",marginVertical:2,marginHorizontal:4}}>Km</Text>
                        </View>
                </View>
            </View>
        </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
    },
    image: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: "#C39E50",
        marginHorizontal: 10,
        borderRadius:10
    },
    ResName: {
        fontSize: 16,
        color: "#FFEAC0",
        fontFamily: "Poppins-Medium"
    },
    special: {
        fontSize: 15,
        color: "#828282",
        fontFamily: "Poppins-Redium",
        paddingHorizontal: 5,
        marginVertical: 5
    },
    HorLine: {
        borderWidth: 1,
        opacity: 0.7,
        borderColor: "#CBA960",
        marginHorizontal: 5,
        marginVertical: 5,
    },
    staricon: {
        marginVertical: 5,
        marginHorizontal: 5
    },
    rating:{
        marginVertical: 4,
        color:"#CBA960",
        fontSize:12
    },
    place:{
        marginVertical: 3,
        color:"#CBA960",
        fontFamily:"Poppins-Regular",
        fontSize:12
    },
    distance:{
        color:"#C39E50"
    }
})
