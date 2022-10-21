import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'

const nroEmergencia = () => {

    const [nro, setNro] = useState('')

    onChangeText = (text) => {
        setNro(text)
    }
    
    
  return (
    <View>
      <Text>nroEmergencia</Text>
    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        />


    </View>
  )
}

export default nroEmergencia