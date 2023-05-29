import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity,Image,ScrollView } from 'react-native';

const App = () => {
  const handleButtonPress = (buttonName) => {
    // Aquí puedes añadir lógica para manejar el evento de pulsación de los botones
    console.log('Botón presionado:', buttonName);
  };
  



  return (
    
        <View style={styles.container}>
        <View style={ styles.centerContent}>
        <Image style={{width: 200, height: 200}} source={require('./img/diabetes.png')} />
        </View>

      <Text style={styles.title}>ControlHealt</Text>
    
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/src/Formulario.js')}>
        <Text style={styles.buttonText}>Informacion🗒️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Botón 2')}>
        <Text style={styles.buttonText}>Nutricion⭐</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Botón 3')}>
        <Text style={styles.buttonText}>Actividad Fisica⭐</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Botón 3')}>
        <Text style={styles.buttonText}>Medicos🩺</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Botón 3')}>
        <Text style={styles.buttonText}>Control🩸</Text>
      </TouchableOpacity>
  
  
    </View>
    
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0EAFC',
  },
  title: {
    fontSize: 34,
    color: 'White',
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
