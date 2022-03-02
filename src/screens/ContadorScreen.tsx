import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Fab from '../components/Fab'




const ContadorScreen = () => {

    const [contador, setContador] = useState(0)

  return (
    <View style={estilos.conteiner}>
        <Text style={{color:"black",fontSize:40,textAlign:"center"}}>
            contador: {contador}
        </Text>

        <Fab
            title="+1"
            onPress={() => setContador(contador +1)}
        />
        <Fab
            title="-1"
            onPress={() => setContador(contador -1)}
        />

        {/* <TouchableOpacity style={estilos.botonLocatinMenos} onPress={() => setContador(contador - 1)}>
            <View style={estilos.fab}>
                <Text style={estilos.fabText}>
                    -1
                </Text>
            </View>
        </TouchableOpacity> */}

    </View>
  )
}

const estilos = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:"center"
    },
   
})

export default ContadorScreen