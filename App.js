import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// views import 
import Home from './Views/Home';
import HoraYTemperatura from './Views/HoraYTemperatura';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HoraTemp">
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="HoraTemp" component={HoraYTemperatura}
         options={{
         headerTitle: "Hora y temperatura actuales",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



