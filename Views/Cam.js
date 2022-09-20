import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import {
  Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import Icon from 'react-native-vector-icons/FontAwesome';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';



export default function Cam() {
  const cameraRef = useRef();

  const [type, setType] = useState(CameraType.front);
  const [permission, setPermission] = useState(false);
  const [libraryPermission, setLibraryPermission] = useState(false);
  const [photo, setPhoto] = useState();
  const [flashMode, setFlashMode] = useState('off');

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const libPermission = await MediaLibrary.requestPermissionsAsync();
      setPermission(cameraPermission);
      setLibraryPermission(libPermission);
    })();
  }, []);

  if (permission === undefined) {
    return <Text>Requesting prtmissions...</Text>
  } else if (!permission) {
    return <Text>Permission not granted. Please re-check that in your settings.</Text>
  }

  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  const onSnap = async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true, exif: false };
      let pic = await cameraRef.current.takePictureAsync(options);

      if (type === CameraType.front) {
        pic = await manipulateAsync(
            pic.localUri || pic.uri,
            [
                { rotate: 180 },
                { flip: FlipType.Vertical },
            ],
            { compress: 1, format: SaveFormat.PNG }
        );
    }

      setPhoto(pic);
    }
  };

  if (photo) {

    

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    }

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preView} source={{ uri: photo.uri }} />
        {libraryPermission ? <Button title='Guardar' onPress={savePhoto} /> : undefined}
        <Button title='Descartar' onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off')
    } else if (flashMode === 'off') {
      setFlashMode('on')
    } else {
      setFlashMode('auto')
    }

  }

  return (
    <>

      <View style={styles.container} >
        <Camera style={styles.camera} type={type} ref={cameraRef} flashMode={flashMode} 
        >
          <View style={styles.bottomButtonsContainer}>
            <TouchableOpacity onPress={toggleCameraType}>
              <MaterialIcons name='flip-camera-ios' size={28} color='white' />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onSnap}
              style={styles.capture}
            />
            <TouchableOpacity onPress={__handleFlashMode}
            >
              <Icon
                name="flash"
                size={40}
                color={flashMode === 'off' ? '#000' : '#fff'}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View >


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomButtonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 28,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  capture: {
    backgroundColor: '#5A45FF',
    borderRadius: 45,
    marginBottom: 28,
    height: 80,
    width: 80,
    marginHorizontal: 30
  },
  preView: {
    alignSelf: "stretch",
    flex: 1,
  },
});