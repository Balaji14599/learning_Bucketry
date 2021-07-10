import React,{useState,useEffect} from 'react'
import { View, Text ,StyleSheet,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import StoreInformation from '../components/StoreInformation';
import { getRecommendProductinfo, getStoreInfoRemote } from '../remote/appRemote';
import CartButton from './CartButton';

export default function AddQuantityButton(props) {

    const [quantity, setQuantity] = useState(0)
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(null)
    const [recommendResult, recommendSetResult] = useState(null)
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(false);
    const [totalPrice, setTotal] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true)
            const response = await getStoreInfoRemote()
            setLoading(false)
            if (response) {
                setResult(response)
            }
            const recommendResponse = await getRecommendProductinfo()
            setLoading(false)
            if (recommendResponse) {
                recommendSetResult(recommendResponse)
            }
        })()

    }, []
    )
    useEffect(() => {
        console.log('Cart Updated')
        let isInCart =cart.find(item => item.id === props.id)
        // console.log("cart deatils",isInCart);
        if (isInCart) {
            setQuantity(isInCart.quantity)
        }
        else{
            
        setQuantity(0)
        }
    }, [props.cart])
    


    const incrementAction = () => {
      props.updateCart(props.id)
    }
    const decrementAction = () => {
     props.removeCart(props.id)
    }
    

    return (
        <View style={styles.addquantity}>
            {quantity > 0 ? (
                <View style={{ flexDirection: "row", position: "absolute" }}>
                    <Pressable onPress={decrementAction}>
                        <Icon name="remove-outline" size={30} color="#FFFFFF"
                            style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
                    </Pressable>
                    <Text style={styles.quantitytext}>{quantity}</Text>
                    <View style={styles.plus}>
                        <Pressable onPress={incrementAction}>
                            <Icon name="add-outline" size={30} color="#FFFFFF"
                                style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
                        </Pressable>
                    </View>
                </View>

            ) : (

                <View style={styles.plus}>
                    <Pressable onPress={incrementAction}>
                        <Icon name="add-outline" size={30} color="#FFFFFF"
                            style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
                    </Pressable>
                </View>
            )}
        </View>
        
    )
}
const styles=StyleSheet.create({
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
    addquantity: {
        marginTop: 60,
    },
})
