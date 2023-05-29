import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function ListaDeElementos() {
  const [nombres, setNombres] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [letra, setLetra] = useState('');

  const handleSubmit = () => {
    if (nuevoNombre.trim() !== '')
    setNombres([...nombres, nuevoNombre.trim()]);
    setNuevoNombre('');
  };

  const handleChange = (value) => {
    setNuevoNombre(value);
  };

  const handleChangeLetra = (value) => {
    setLetra(value);
  };

  const contarNombresConLetra = () => {
    let count = 0;

    nombres.forEach((nombre) => {
      if (nombre.charAt(0).toLowerCase() === letra.toLowerCase()) {
        count++;
      }
    });

    return count;
  };

  return (
    <View>
      <Text style={{ textAlign: 'center' }}>
        ⭐Crea un componente que tome un arreglo de nombres {'\n'}
        y muestre la cantidad de nombres que comienzan con una letra específica {'\n'}
        ingresada por el usuario. Utiliza una variable de estado para {'\n'}
        guardar el arreglo y la letra ingresada.
      </Text>
      
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Nombres"
        value={nuevoNombre}
        onChangeText={handleChange}

      />
      <Button title="Agregar" onPress={handleSubmit} />

      {nombres.map((nombre, index) => (
        <Text key={index}>{'✅' + nombre}</Text>
      ))}

      <Text>
        Ingrese una letra para contar nombres que comienzan con esa letra:
      </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleChangeLetra}
        maxLength={1}
      />

      {nombres.length > 0 && letra.length > 0 && (
        <Text>
          Hay {contarNombresConLetra()} nombres con la letra: "{letra}"
        </Text>
      )}
    </View>
  );
}




export default ListaDeElementos;


