import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, View, Platform } from 'react-native';
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
        <Button title="Elegí una foto" onPress={pickImage}/>
        
        {fondo && 
                <Image source={{ uri: fondo }} style={{ width: 200, height: 200, marginBottom:100, marginTop:40,}} 
        />}

        {/*
                <Text style={styles.text}>{temp ? temp : null} </Text>

*/}
        </View>
    );
}