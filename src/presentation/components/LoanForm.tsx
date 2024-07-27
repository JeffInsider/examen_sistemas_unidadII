import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../theme/styles';
import { Navigation } from '../routes/Navigation';
import { useNavigation } from '@react-navigation/native';

interface Props {
  onSubmit: (details: {
    name: string;
    amount: number;
    annualInterestRate: number;
    months: number;
    startDate: string;
    commisionPercentage: number;
  }) => void;
}

export const LoanForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [months, setMonths] = useState('');
  const [startDate, setStartDate] = useState('');
  const [commisionPercentage, setCommisionPercentage] = useState('');

  // Estado para habilitar o deshabilitar el botón
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  //usar navigation para ir a la pantalla anterior
  const navigation = useNavigation();

  //logica para validar los campos
  const validInput = () => {
    return name !== '' &&
      amount !== '' &&
      annualInterestRate !== '' &&
      months !== '' &&
      startDate !== '' &&
      commisionPercentage !== '';
  };
  //logica para actualizar el estado de los campos
  useEffect(() => {
    setIsButtonEnabled(validInput());
  }, [name, amount, annualInterestRate, months, startDate, commisionPercentage]);


  //funcion para enviar el formulario
  const handleSubmit = () => {

    const data = {
      name,
      amount: parseFloat(amount),
      annualInterestRate: parseFloat(annualInterestRate),
      months: parseInt(months),
      startDate,
      commisionPercentage: parseFloat(commisionPercentage),
    };

    // Enviar datos
    onSubmit(data);

    //limpiar los campos
    setName('');
    setAmount('');
    setAnnualInterestRate('');
    setMonths('');
    setStartDate('');
    setCommisionPercentage('');

  };

  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.title}>Ingrese sus datos</Text>

        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.labelB}>Ir a inicio</Text>
        </Pressable>

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ingrese su nombre"
            placeholderTextColor={'#a1a1a1'}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Monto del préstamo:</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="Ingresar por ejemplo: 10000"
            placeholderTextColor={'#a1a1a1'}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Tasa de interés anual %:</Text>
          <TextInput
            style={styles.input}
            value={annualInterestRate}
            onChangeText={setAnnualInterestRate}
            keyboardType="numeric"
            placeholder="Ingresar por ejemplo: 7"
            placeholderTextColor={'#a1a1a1'}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Plazo en meses:</Text>
          <TextInput
            style={styles.input}
            value={months}
            onChangeText={setMonths}
            keyboardType="numeric"
            placeholder="Ingresar por ejemplo: 12"
            placeholderTextColor={'#a1a1a1'}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Fecha de inicio del préstamo (YYYY-MM-DD):</Text>
          <TextInput
            style={styles.input}
            value={startDate}
            onChangeText={setStartDate}
            placeholder="Ingresar por ejemplo: 2024-07-26"
            placeholderTextColor={'#a1a1a1'}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Porcentaje de comisión:</Text>
          <TextInput
            style={styles.input}
            value={commisionPercentage}
            onChangeText={setCommisionPercentage}
            keyboardType="numeric"
            placeholder="Ingresar por ejemplo: 1"
            placeholderTextColor={'#a1a1a1'}
          />
        </View>

        {/* Se deshabilita el botón si no se han ingresado todos los datos */}
        <Pressable
          style={[styles.button, { backgroundColor: isButtonEnabled ? '#007bff' : '#d3d3d3' }]}
          onPress={handleSubmit}
          disabled={!isButtonEnabled}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
