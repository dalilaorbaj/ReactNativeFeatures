import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import * as Contacts from "expo-contacts";
import FondoImagenContext from '../Contexts/FondoImagenContext';


//si llegamos poner un indicador si es el Numero de Contacto predeterminado de emergencia (con algún icono o similar)

export default function Contactos() {
  const [contacts, setContacts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const {fondo, setFondo} = useContext(FondoImagenContext);


  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        setContacts(data);
      }
    }
  };

  const getPhoneNumbers = (contact) => {
    console.log(contact);
    if (contact.phoneNumbers) {
        return(
            contact.phoneNumbers.map((number, index) => {
                return(
                    <>
                    <Text style={[styles.text, {marginTop: 14}]} key={index}>{number.number}</Text>
                    </>
                )
            })
        )
    }
    };

  useEffect(() => {
    getContacts();
  }, []);

  console.log("contactos", contacts);
  console.log(modalVisible);

  return (

    <View style={styles.container}>
            <ImageBackground source={{ uri: fondo }} resizeMode="cover" style={styles.image}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
            
          <TouchableOpacity key={item.id}>
            <View style={styles.contenedor}>
              <Text style={styles.text}> {item.name}</Text>
              {getPhoneNumbers(item)}
            </View>
          </TouchableOpacity>          
        )}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  contenedor: {
    width: 250,
    height: "auto",
    margin: 20,
    backgroundColor: 'white',
    borderColor: 'purple',
    borderWidth:5,
    width: 350, 
    height: 150, 
    borderRadius: 20,
  },
  text: {
    marginTop:10,
    fontSize: 20,
    color: "purple",
    fontFamilyName: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
        },
});
