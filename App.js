import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as React from 'react';
import BackgroundImg from './Views/BackgroundImg'
import Cam from './Views/Cam'



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
                    source={{uri: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2014/03/windows_xp_bliss-wide.jpg?fit=1920%2C1200&quality=50&strip=all&ssl=1" }} /*esto esta mal*/
                    resizeMode="stretch"
                    style={styles.img}>
    </ImageBackground>
    <Cam/>
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
});


