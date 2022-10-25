import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Button,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import QRCode from "react-native-qrcode-svg";
  import { BarCodeScanner } from "expo-barcode-scanner";
import { WhiteBalance } from "expo-camera";
  
  //cambiar estilos de esta pagina drasticamente
  
  const Identificacion = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanData, setScanData] = useState();
    const [modalShown, setModalShown] = useState(false);
  
    const getPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
  
    useEffect(() => {
      getPermissions();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanData(data);
      setModalShown(!modalShown);
    };
  
    return (
      <>
        <Modal visible={modalShown} animationType="slide" transparent={true}>
          <View style={styles.modalContainer1}>
            <View style={styles.modalContainer2}>
              <Text style={{ margin: 30, color: 'white',}}>{scanData}</Text>
                <Button style={{bakcgroundColor: 'white',}} title="Cerrar" onPress={() => setModalShown(!modalShown)} />
            </View>
          </View>
        </Modal>
        <View style={styles.container}>
          <View style={styles.QR}>
              <QRCode value="Dalila Orbaj y Carolina Teselman uWu" />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Escanear código QR</Text>
          </TouchableOpacity>
          <BarCodeScanner
            style={{ height: 600, width: 300 }}
            onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
          />
          {scanData && (
            <Button
              title="Volver a escanear"
              onPress={() => setScanData(undefined)}
            />
          )}
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      flexDirection: "column",
    },
    button: {
      margin: 10,
      width: 150,
      alignItems: "center",
      height: 25,
      justifyContent: "center",
      backgroundColor: "purple",
    },
    textButton:{
      color: 'white',
    },
    modalContainer1: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      marginTop:100,
    },
    modalContainer2: {
      width: 300,
      height: 200,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "purple",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      borderRadius: 10,
      width: 240, 
      height: 170,

    },
    buttonModal:{
      backgroundColor: 'white',
      borderRadius: 10,

    },
    QR:{
        marginTop: 100,
    },
  });
  
  export default Identificacion;
  