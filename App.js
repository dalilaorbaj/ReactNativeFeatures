import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FondoProvider } from './Contexts/FondoImagenContext';


// views import 
import Home from './Views/Home';
import HoraYTemperatura from './Views/horaYTemperatura';
import Contactos from './Views/contactos';
import NroEmergencia from './Views/nroEmergencia';
import VideoFavorito from './Views/videoFavorito';
import Identificacion from './Views/Identificacion'
import ImagenFondo from './Views/ImagenFondo'
//import MensajesUsuario from './Views/MensajesUsuario'
//import LlamadoEmergencia from './Views/LlamadoEmergencia'




export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <FondoProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VideoFavorito">
        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="HoraTemp" component={HoraYTemperatura}
          options={{
            headerTitle: "Hora y temperatura actuales",
          }} />

        <Stack.Screen name="Contactos" component={Contactos}
          options={{
            headerTitle: "Contactos",
          }} />

        <Stack.Screen name="NroEmergencia" component={NroEmergencia}
          options={{

            headerTitle: "Nro de emergencia",
          }} />

        <Stack.Screen name="VideoFavorito" component={VideoFavorito}
          options={{
            headerTitle: "¿Cuál es tu video favorito?",
          }} />

        <Stack.Screen name="Identificacion" component={Identificacion}
          options={{
            headerTitle: "Literalmente nosotras",
          }} />

        <Stack.Screen name="ImagenFondo" component={ImagenFondo}
          options={{
            headerTitle: "Imágen fondo",
          }} />
{/*
        <Stack.Screen name="MensajesUsuario" component={MensajesUsuario}
          options={{
            headerTitle: "Mensajes Usuario",
          }} />

<Stack.Screen name="LlamadoEmergencia" component={LlamadoEmergencia}
          options={{
            headerTitle: "Llamado Emergencia",
          }} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
    </FondoProvider>


  );
}



