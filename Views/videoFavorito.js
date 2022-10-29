import { StyleSheet, View, Dimensions, TextInput, TouchableOpacity, Text } from 'react-native'
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
            placeholder='Ingresá un video...'
            style={styles.input}
        />
        {/*<View style={styles.button}>
        <Button 
            title='Guardar'
            style={{backgroundColor:'#1E6738'}}
            onPress={async() => setVideoTextStorage()}
        />
    </View>*/}

        <TouchableOpacity
          style={styles.button}
          onPress={async() => setVideoTextStorage()}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Guardar</Text>
 </TouchableOpacity>

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
        flex: .8, 
    },
    input:{
      borderRadius: 10,
      borderColor: 'purple',
      borderWidth: 2,
      backgroundColor: 'white',
      margin: 10,
      padding: 10,
    },
    video: {
        alignSelf: 'center',
        width: windowWidth,
        height: 210,
        marginTop: 30
    },
    button:{ 
      backgroundColor: 'purple', 
      borderRadius: 10,
      width: 100,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginLeft: 135
    }, 
    loginText:{
      color:'white', 
      fontWeight:'bold',
    }
})