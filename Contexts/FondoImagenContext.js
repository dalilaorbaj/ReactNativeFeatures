import { createContext, useState, useMemo, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

const FondoImagenContext = createContext();

export const FondoProvider = ({ children }) => {
    const [fondo, setFondo] = useState();

    useEffect(() => {
        console.log('Desde el context: ', fondo);
    }, [fondo]);

    useEffect(() =>{
        if(fondo){
            AsyncStorage.setItem('fondo', fondo)
            setFondo(fondo)
        }
    }, [fondo])

    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('fondo');
          if (value !== null) {
            // We have data!!
            setFondo(value)
            console.log(value);
          }
        } catch (error) {
          // Error retrieving data
        }
      };

      useEffect(() => {
        retrieveData();
    }, []);

    const value = useMemo(() => {
        return {
            fondo,
            setFondo
        }
    }, [fondo])

    return (
        <FondoImagenContext.Provider value={value}>
            {children}
        </FondoImagenContext.Provider>
    );
};

export default FondoImagenContext;