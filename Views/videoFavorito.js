import { StyleSheet, Text, View, Dimensions, TextInput, Button } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

//HACER ESTA PANTALLA QUE NO ANDA XD
// cambiar el tamaño y color del boton guardar
//tambien poner un input bien (como el de nroEmergencia)

const ReproductorVideoView = () => {
    const video = useRef(null);
    const [videoText, setVideoText] = useState('')
    const [status, setStatus] = useState({});

    const setVideoTextStorage = async () => {
        try {
          await AsyncStorage.setItem('video_text', videoText)
        } catch (e) {
            console.log(e);
        }
    }

    const getVideoTextStorage = async () => {
        try {
          await AsyncStorage.getItem('video_text').then((value) => setVideoText(value))
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getVideoTextStorage()
    }, [])

    return (
      <View style={styles.container}>
        <TextInput 
            value={videoText}
            onChangeText={setVideoText}
            placeholder='Ingresar Video'
        />
        <Button 
            title='Guardar'
            onPress={async() => setVideoTextStorage()}
        />
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: `${videoText}.mp4`,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
    )
}

export default ReproductorVideoView

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: .8
    },
    video: {
        alignSelf: 'center',
        width: windowWidth,
        height: 210,
        marginTop: 30
    },
})