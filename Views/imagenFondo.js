import React, { useState, useEffect, useContext } from 'react';
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FondoImagenContext from '../Contexts/FondoImagenContext';

export default function ImagenFondo() {
    const {fondo, setFondo} = useContext(FondoImagenContext);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log('pickImage: ', result);

        if (!result.cancelled) {
            setFondo(result.uri);
            alert('Fondo guardado')
        }
    };

    useEffect(() => {
        console.log(fondo);
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <TouchableOpacity
            style={styles.button}
            onPress={pickImage}
            underlayColor='#fff'>
            <Text style={styles.loginText}>Elegí una foto</Text>
        </TouchableOpacity>

        {fondo && 
                <Image source={{ uri: fondo }} style={{ width: 200, height: 200, marginBottom:100, marginTop:40,}} 
        />}
        </View>
    );
}


const styles = StyleSheet.create({
    button:{ 
      backgroundColor: 'purple', 
      borderRadius: 10,
      width: 150,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      
    }, 
    loginText:{
      color:'white', 
      fontWeight:'bold',
    }
})