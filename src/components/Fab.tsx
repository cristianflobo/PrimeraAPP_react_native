import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
    title:string,
    onPress:() => void,
}

const Fab = (props: Props) => {
    console.log(props.title)
    return (
    <TouchableOpacity style={(props.title=="+1") ? estilos.botonLocatinMas:estilos.botonLocatinMenos} onPress={props.onPress}>
            <View style={estilos.fab}>
                <Text style={estilos.fabText}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const estilos = StyleSheet.create({
    botonLocatinMas:{
        position:"absolute",
        bottom:20,
        right:20,
    },
    botonLocatinMenos:{
        position:"absolute",
        bottom:20,
        left:20
    },
    fab:{
        backgroundColor:"#5856D6",
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:"center"
    },
    fabText:{
        color:"white",
        fontSize:25,
        fontWeight:"bold",
        alignSelf:"center"
    }
})
export default Fab