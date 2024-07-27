import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/Navigation';
import { styles } from '../../theme/styles';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'Home'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoanForm')}
      >
        <Text style={styles.buttonText}>Ir al Formulario de Préstamo</Text>
      </TouchableOpacity>

      {/* Botón verde para navegar a CalculationsScreen */}
      <TouchableOpacity
        style={styles.button2} // Combina estilos
        onPress={() => navigation.navigate('Explicate')} // Actualizado
      >
        <Text style={styles.buttonText}>Ir a Calculos</Text>
      </TouchableOpacity>
    </View>
  );
};