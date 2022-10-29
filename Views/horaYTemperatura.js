import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import * as Location from 'expo-location';
import axios from 'axios';
import FondoImagenContext from '../Contexts/FondoImagenContext';



const HoraYTemperatura = () => {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [date, setDate] = useState(null);
  const [temp, setTemp] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const { fondo, setFondo } = useContext(FondoImagenContext);


  const getClimate = async () => {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d8f07e58cc79c03c12ffbb3b6ca4bdf0&units=metric`,
    )
      .then(function (response) {
        console.log(response.data.main.temp);
        setTemp(response.data.main.temp);
      }).catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    (async () => {
      let dat = new Date();
      console.log('carlos', dat.toTimeString().slice(0, 5));
      setDate(dat.toTimeString().slice(0, 5))

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let locat = await Location.getCurrentPositionAsync({});
      setLat(locat.coords.latitude)
      setLong(locat.coords.longitude)

      if (lat !== null && long !== null) {
        await getClimate();

      }

    })();
  }, []);

  return (
    <View style={styles.container}>

      <ImageBackground source={{ uri: fondo }} resizeMode="cover" style={styles.image}>


        <View style={{ marginBottom: 35, textAlign: 'center' }}>
          <Text style={styles.textBold}>Hora actual</Text>
          <Text style={styles.textSoft}>{date}</Text>
          <Text style={styles.textBold}>Temperatura actual</Text>
          <Text style={styles.textSoft}>{temp ? temp : "buscando..."} </Text>

        </View>
      </ImageBackground>
    </View >
  )
}

export default HoraYTemperatura

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textSoft: {
    marginTop: 10,
    fontSize: 30,
    color: "purple",
    textAlign: 'center', 
    marginBottom: 30,
  },
  textBold: {
    marginTop: 10,
    fontSize: 30,
    color: "purple",
    fontWeight: "bold",
    textAlign: 'center', 
    marginBottom: -10,
    textDecorationLine: 'underline',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});