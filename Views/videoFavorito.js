import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, TextInput, Text, TouchableOpacity, ScrollView, Vibration, ImageBackground } from 'react-native';
import { Video } from 'expo-av';
import React, {useRef, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

//CAMBIAR LOS ESTILOS DE ESTA VIEW

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  const [video, setVideo] = useState(null);
  const [status, setStatus] = useState({});
  const [value, setValue] = useState('')
  const videoRef = useRef(null);

  const saveValue = () =>{
      if(video){
          AsyncStorage.setItem('video', video)
          setVideo('')
          alert('video guardado')
      } else{
          alert('Ingrese un video')
          Vibration.vibrate(3 * 1000)
      }
  }

  const getValue = () => {
      AsyncStorage.getItem('video')
      .then(value => {
          setValue(value)
          setVideo(value)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.titleText}>Video Player</Text>
            <TextInput
                placeholder='Enter Video URL'
                value={video}
                onChangeText={(data)=>setVideo(data)}
                underlineColorAndroid='transparent'
                style={styles.input}
            />
            <Video
              ref={videoRef}
              style={styles.video}
              source={{uri: video}}
              useNativeControls
              onPlaybackStatusUpdate={setStatus}
            />
              <TouchableOpacity style={styles.buttonStyle} onPress={saveValue}>
                  <Text style={styles.buttonTextStyle}>Save Value</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonStyle} onPress={getValue}>
                  <Text style={styles.buttonTextStyle}>Get Value</Text>
              </TouchableOpacity>
              <StatusBar style="auto" />
          </ImageBackground>
        </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
    marginVertical: 10
  },
  buttons: {
    margin: 16
  },
  input: {
    textAlign: 'center',
    height: 60,
    width: '80%',
    fontSize: 15,
    marginVertical: 10,
    justifyContent: 'center',
  },
  titleText: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 15,
  },
  buttonStyle: {
      fontSize: 16,
      color: 'white',
      backgroundColor: 'blue',
      padding: 5,
      marginTop: 10,
      minWidth: 250,
      justifyContent: 'center'
  },
  buttonTextStyle: {
      padding: 5,
      color: 'white',
      textAlign: 'center',
      fontSize: 22
  },
  textStyle: {
      padding: 10,
      textAlign: 'center',
  }
});

