import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button, Linking, ImageBackground } from 'react-native'
import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Octicons';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon6 from 'react-native-vector-icons/FontAwesome';
import Icon7 from 'react-native-vector-icons/Feather';


const Home = ({ navigation }) => {
    const [data, setData] = useState({
      x: 0,
      y: 0,
      z: 0,
    });
    const [subscription, setSubscription] = useState(null);
    const [numero, setNumero] = useState("");
    const [image, setImage] = useState(null);
    const [fondo, setFondo] = useState(null);
  
    const _subscribe = () => {
      setSubscription(
        Accelerometer.addListener((accelerometerData) => {
          setData(accelerometerData);
        })
      );
    };
  
    const _unsubscribe = () => {
      subscription && subscription.remove();
      setSubscription(null);
    };
  
    const obtenerNumero = async () => {
      const numLocal = await AsyncStorage.getItem("numero");
      setNumero(numLocal);
    };
  
    useEffect(() => {
        obtenerNumero();
        _subscribe();
      return () => _unsubscribe();
    }, []);
  
    const { x, y, z } = data;
  
    useEffect(() => {
      if (x > 2 || y > 2 || z > 2) {
        Linking.openURL(`https://wa.me/549${numero}?text=SOS porfa ayuda`);
      }
    }, [x, y, z]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Bienvenido!</Text>

      <View style={{ flexDirection: "row", marginTop: 95, justifyContent: "space-around" }}>
        <TouchableOpacity onPress={()=> navigation.navigate("HoraTemp")}>
          <Icon name="partly-sunny-outline" size={80} color="purple" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("Contactos")}>
          <Icon2 name="contacts" size={75} color="purple" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", marginTop: 60, justifyContent: "space-around" }}>
      <TouchableOpacity onPress={()=> navigation.navigate("NroEmergencia")}>
        <Icon5 name="asterisk" size={75} color="purple" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate("VideoFavorito")}>
        <Icon4 name="video" size={75} color="purple" />
      </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", marginTop: 60, justifyContent: "space-around" }}>
      <TouchableOpacity onPress={()=> navigation.navigate("Identificacion")}>
        <Icon name="people-outline" size={80} color="purple" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate("ImagenFondo")}>
        <Icon6 name="photo" size={70} color="purple" />
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  text: {
    marginTop: 90,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",

  },
});