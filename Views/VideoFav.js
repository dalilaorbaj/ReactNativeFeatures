import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video } from "expo-av";
import FondoImagenContext from '../Contexts/FondoImagenContext';


const VideoFav = () => {
  const [URL, setURL] = useState(null);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [image, setImage] = useState(null);
  const {fondo, setFondo} = useContext(FondoImagenContext);


  const guardarVideo = async () => {
    try {
      await AsyncStorage.setItem("Video", URL);
      alert("Muy buen video bro");
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerVideo = async () => {
    try {
      const video = await AsyncStorage.getItem("Video");
      if (video !== null) {
        setURL(video);
      } else {
        setURL(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerVideo();
  }, []);

  return (
    <>
      <ImageBackground style={styles.container} source={{ uri: fondo }}>
        <View /*style={{ flexDirection: "row" }}*/>
          <TextInput
            style={styles.input}
            value={URL}
            placeholder={"Ingresá una URL"}
            onChangeText={setURL}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => guardarVideo()}
          >
          <Text style={styles.loginText}>Guardar</Text>
          </TouchableOpacity>
        </View>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: URL,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      flex: 1, 
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
    width: 390,
    height: 200,
    padding: 10,
    margin: 10,
  },
  button:{ 
    backgroundColor: 'purple', 
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 135, 
    marginBottom: 20,
  }, 
  loginText:{
    color:'white', 
    fontWeight:'bold',
  }
})

export default VideoFav;