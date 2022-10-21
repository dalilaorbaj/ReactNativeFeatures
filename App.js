import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// views import 
import Home from './Views/Home';
import HoraYTemperatura from './Views/HoraYTemperatura';
import Contactos from './Views/Contactos';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}



