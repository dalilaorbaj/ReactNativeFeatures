import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import axios from 'axios';



const HoraYTemperatura = () => {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [date, setDate] = useState(null);
  const [temp, setTemp] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getClimate = async () => {

    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely',
      params: { lat: lat, lon: long },
      headers: {
        'X-RapidAPI-Key': '2a13a20fc9msh9549bb43c8392a8p1a6917jsnacf5a091ad14',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data.data[0].temp);
      return response.data.data[0].temp;
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
        let clim = await getClimate()
        console.log('clima', clim);
        setTemp(clim)
        
      }

    })();
  }, []);

// API URL: https://rapidapi.com/weatherbit/api/weather/

// BUSCAR API QUE ANDE WEY

  return (
    <View style={styles.container}>

      <View style={{ marginTop: 15 }}>
        <Text style={styles.text}>Hora actual: {date}</Text>
        <Text style={styles.text}>Temperatura actual: </Text>
        <Text style={styles.text}>{temp ? temp : null} </Text>

      </View>
    </View>
  )
}

export default HoraYTemperatura

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    marginLeft: 10
  },
  text: {
    marginTop: 10,
    fontSize: 30
  }
});