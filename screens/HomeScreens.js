import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import StoreInformation from '../components/StoreInformation';
import { getRecommendProductinfo, getStoreInfoRemote } from '../remote/appRemote';
import RecomandProduct from '../components/RecomandProduct';
import CartButton from '../components/CartButton';



export default function HomeScreens(props) {
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(null)
    const [recommendResult, recommendSetResult] = useState(null)
    const [cart, setCart] = useState([])
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
        let tempPrice = 0 
        for (let item of cart) {
            console.log(item.quantity);
            console.log(item.price);
            let itemPrice = item.quantity * parseInt(item.price)
            console.log("my item price",itemPrice);
            tempPrice = tempPrice + itemPrice
           
        }
        setTotal(tempPrice)

    }, [cart])

    // A function that update Cart State
    const updateCart = id => {
        // console.log(id)
        let cartItem = recommendResult.filter(item => item.id === id)
        // console.log(cartItem)
        let isinCart = cart.find(item => item.id === id)
        // console.log('isInCart: ', isinCart)
        if (isinCart) {
            // Increase the Quantity and update the Cart
            console.log('Iteam already in Cart')
            let newObj = {
                ...isinCart
            }
            newObj.quantity += 1
            let newCart = [...cart]
            let index = cart.findIndex(item => item.id === id)
            // console.log(index)
            newCart.splice(index, 1, newObj)
            setCart(newCart)

        }
        else {
            // create a new Item, set the quantity 1, update the cart
            // console.log(cartItem)
            let newobj = {
                ...cartItem[0],

            }
            newobj.quantity = 1
            if (newobj.variation === "true") {
                newobj.price = newobj.price_variation[0].amount
                console.log("newObject price",newobj.price);
               }
            let newCart = [...cart]
            newCart.push(newobj)
            setCart(newCart)
            // console.log(newCart)
            // console.log(JSON.stringify(newobj))
        }

    }

    const removeCart = id => {
        // filter the item from the cart
        let cartItem = cart.find(item => item.id === id)
        // console.log(cartItem);
        // item is found get the quantity value
        if (cartItem) {
            let quantity = cartItem.quantity
            // else remove the whole valuew
            if (quantity === 1) {
                let newCart = [...cart]
                let index = newCart.findIndex(item => item.id === id)
                newCart.splice(index, 1)
                // console.log(newCart)
                setCart(newCart)
            }
            //if quantity greater than 1 decrement the quantity and update the cart
            else {
                let newObj = {
                    ...cartItem
                }

                newObj.quantity = newObj.quantity - 1;
                let newCart = [...cart]
                let index = cart.findIndex(item => item.id === id)
                newCart.splice(index, 1, newObj)
                setCart(newCart)
            }
        } else {
            console.log("critical error")
        }
    }
    return (
        <View>
            <ScrollView style={{ marginBottom: 65, display: "flex" }}
                showsVerticalScrollIndicator={false}>
                <LinearGradient colors={['#000000', '#2E2E2E']} style={styles.linearGradient}>
                    <View style={styles.container}>
                        <TextInput
                            value={keyword}
                            onChangeText={(e) => setKeyword(e)}
                            placeholder="Search in Homescreen"
                            placeholderTextColor="#C39E50"
                            style={styles.textinput} />
                        <Icon name="search" size={30} color="#CBA960" />
                    </View>
                    {
                        result ? <StoreInformation image={result.Restaurant_image}
                            ResName={result.Restaurant_name} special={result.special}
                            rating={result.Restaurant_rating}
                            place={result.city_name}
                            distance={result.distance} /> : null
                    }
                </LinearGradient>
                {
                    recommendResult ? recommendResult.map((item) => {
                        return (
                            <View key={item.id}>
                                <RecomandProduct
                                    id={item.id}
                                    recomendImage={item.img_url}
                                    category_name={item.category_name}
                                    description={item.description}
                                    amount={item.amount}
                                    demo_amount={item.demo_amount}
                                    variation={item.variation}
                                    price_variation={item.price_variation}
                                    cart={cart}
                                    updateCart={updateCart}
                                    removeCart={removeCart}
                                />
                            </View>
                        )
                    }) : null
                }
            </ScrollView>
            {cart.length > 0 ? <CartButton cart={cart} totalPrice={totalPrice} navigation={props.navigation}
            result={result}/> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
        flexGrow: 1,
        padding: 2,
        color: "red"
    },
    linearGradient: {
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        paddingTop: 10,
        paddingBottom: 20

    },
    container:
    {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        borderColor: "#C39E50",
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
    },

})