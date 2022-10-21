import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import * as Contacts from "expo-contacts";

export default function Contactos() {
  const [contacts, setContacts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

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
                    <Text style={[styles.text, {marginTop: 14}]} key={index}>Tel: {number.number}</Text>
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
    // LA CONXHA NO PUEDO ACCEDER AL NUM DE TELEFONO


    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
            
          <TouchableOpacity>
            <View style={styles.contenedor}>
              <Text style={styles.text}>Nombre: {item.name}</Text>
              {getPhoneNumbers(item)}
            </View>
          </TouchableOpacity>          
        )}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedor: {
    width: 250,
    height: "auto",
    margin: 20,
  },
  text: {
    fontSize: 20,
    color: "black",
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
