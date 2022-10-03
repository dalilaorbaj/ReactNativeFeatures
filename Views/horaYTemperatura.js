import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HoraYTemperatura = () => {
  return (
    <View style={styles.container}>
    
    <View style={{marginTop: 15}}>
      <Text style={styles.text}>Hora actual: </Text>
      <Text style={styles.text}>Temperatura actual: </Text>
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