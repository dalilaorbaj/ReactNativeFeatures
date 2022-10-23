import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// views import 
import Home from './Views/Home';
import HoraYTemperatura from './Views/horaYTemperatura';
import Contactos from './Views/contactos';
import NroEmergencia from './Views/nroEmergencia';
import VideoFavorito from './Views/videoFavorito';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contactos">
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="HoraTemp" component={HoraYTemperatura}
         options={{
         headerTitle: "Hora y temperatura actuales",
        }}/>

        <Stack.Screen name="Contactos" component={Contactos}
          options={{
          headerTitle: "Contactos",
        }}/>

        <Stack.Screen name="NroEmergencia" component={NroEmergencia}
          options={{
          headerTitle: "Nro de emergencia",
        }}/>

        <Stack.Screen name="VideoFavorito" component={VideoFavorito}
          options={{
          headerTitle: "Video favorito",
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



