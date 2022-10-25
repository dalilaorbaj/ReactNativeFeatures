import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Octicons';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon6 from 'react-native-vector-icons/FontAwesome';
import Icon7 from 'react-native-vector-icons/Feather';

import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Bienvenido!</Text>

      <View style={{ flexDirection: "row", marginTop: 65, justifyContent: "space-around" }}>
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

      <View style={{ flexDirection: "row", marginTop: 60, justifyContent: "space-around" }}>
      <TouchableOpacity onPress={()=> navigation.navigate("Contactos")}>
        <Icon7 name="message-square" size={80} color="purple" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate("Contactos")}>
        <Icon name="ios-call-outline" size={70} color="purple" />
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