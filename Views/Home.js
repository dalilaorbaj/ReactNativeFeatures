import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home con Iconos</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container: {
    flex: 1, 
    marginTop: 20
},
text: {
    marginTop: 60
},
});