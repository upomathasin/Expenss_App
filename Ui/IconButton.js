import { Ionicons } from "@expo/vector-icons";
import { Pressable,View,StyleSheet } from "react-native";
export default function IconButton ({icon,size,color,onPress}){
return (
    <Pressable onPress={onPress} style={({pressed})=> pressed && Styles.pressed}>
        <View style={Styles.buttonContainar}>
            <Ionicons name={icon} size={size} color={color}/>
        </View>
    </Pressable>
);

}



const Styles= StyleSheet.create( {
    buttonContainar:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:2
    },
    pressed:{
      opacity:0.75
    }
})