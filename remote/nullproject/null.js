props.count > 0 ? <View> <Pressable onPress={deletePressHandler}>
    <Icon name="remove-outline" size={30} color="#FFFFFF"
        style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
</Pressable>  <Text>{props.count}</Text><Pressable onPress={addPresshandler}>
        <Icon name="add-outline" size={30} color="#FFFFFF"
            style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
    </Pressable>  : <Pressable onPress={addPresshandler}>
        <Icon name="add-outline" size={30} color="#FFFFFF"
            style={{ backgroundColor: "#000000", borderRadius: 50, width: 35, height: 35, textAlign: "center" }} />
    </Pressable>