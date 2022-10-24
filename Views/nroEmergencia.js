import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

//CAMBIAR LOS ESTILOS DE ESTA VIEW (titulo y botones, centrar y temañao)



const NumeroEmergencia = () => {
    const [numero, setNumero] = useState('')
    const [value, setValue] = useState('')

    const saveValue = () =>{
        if(numero){
            AsyncStorage.setItem('numero', numero)
            setNumero('')
            alert('Numero guardado')
        } else{
            alert('Ingrese un numero')
        }
    }

    const getValue = () => {
        AsyncStorage.getItem('numero')
        .then(value => {
            setValue(value)
        })
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.container}>
                        <ScrollView>
                        <TextInput
                            placeholder='Ingresa el número de emergencia'
                            value={numero}
                            onChangeText={(data)=>setNumero(data)}
                            keyboardType='numeric'
                            underlineColorAndroid='transparent'
                            style={styles.textInputStyle}
                        />
                        <TouchableOpacity style={styles.buttonStyle} onPress={saveValue}>
                            <Text style={styles.buttonTextStyle}>Guardar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} onPress={getValue}>
                            <Text style={styles.buttonTextStyle}>¿Cuál es mi número de emergencia?</Text>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>{value}</Text>
                        </ScrollView>
                    </View>
               
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },  
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: 'rgba(255,255,255,0.25)',
    },
    textInputStyle: {
        textAlign: 'center',
        height: 60,
        width: '100%',
        borderWidth: 1,
        borderColor: 'purple',
        fontSize: 22,
        backgroundColor: 'white',
    },
    buttonStyle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'purple',
        padding: 5,
        marginTop: 10,
        minWidth: 250,
        justifyContent: 'center'
    },
    buttonTextStyle: {
        padding: 15,
        color: 'white',
        textAlign: 'center',
        fontSize: 22
    },
    textStyle: {
        padding: 10,
        textAlign: 'center',
    },
    big: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    btnText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    },
    title:{
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    root: {
        flex: 1,
        padding: 30,
    },  
    image: {
        flex: 1,
        justifyContent: "center",
    },
    appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    },
    appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
    },
    text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    marginVertical: 20,
    },
})

export default NumeroEmergencia