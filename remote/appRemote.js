import requestServer from "./requestServer"

export async function getStoreInfoRemote(){
    try{
        const response = await requestServer("POST","https://bucketry.shop/dashboard/API/user/get_single_store.php",	{
            "latitude": "10.3833",
            "longitude": "78.8001",
            "hotel_id": "61",
            "mobile_number": "+91987654321"
        })
        return response.Tribata[0]
    }
    catch(err){
        console.log(err)
        return false
    }
}

export async function getRecommendProductinfo(){

    try{
        const response = await requestServer("POST","https://bucketry.shop/dashboard/API/user/get_recommended.php",
        {  "branch_id":"61"})
        return response.Tribata
    }
    catch(err){
        console.log(err)
        return false
    }
}
 