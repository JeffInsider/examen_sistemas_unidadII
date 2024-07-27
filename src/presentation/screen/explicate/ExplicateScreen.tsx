import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { styles } from '../../theme/styles';
import { useNavigation } from '@react-navigation/native';

export const ExplicateScreen = () => {
  //usar navigation para ir a la pantalla anterior
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.title}>Información sobre el Plan de Amortización</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.labelB}>Ir a inicio</Text>
        </Pressable>

        <Text style={styles.label3}>1. Cálculo del Balance Deudor de Seguros de Vida (SVSD)</Text>
        <Text style={styles.label}>
          SVSD para un mes específico = Saldo de capital del mes anterior * 0.15% (mínimo $2).
        </Text>

        <Text style={styles.label3}>2. Cálculo del Interés de Mora</Text>
        <Text style={styles.label}>
          Interés de mora = (Principal atrasado) x (tasa de interés anual * 50% / 360) x (Número de días de atraso).
        </Text>

        <Text style={styles.label3}>3. Cálculo de la Tasa de Interés Anual</Text>
        <Text style={styles.label}>
          La tasa de interés anual se calcula en base al interés aplicado sobre el principal durante el año.
          Por ejemplo, si la tasa de interés anual es del 16%, se aplica este porcentaje sobre el principal.
        </Text>

        <Text style={styles.label3}>4. Porcentajes de Comisión</Text>
        <Text style={styles.label}>
          Los porcentajes de comisión se aplican al monto de cada cuota o al saldo pendiente. Estos porcentajes
          pueden variar según el acuerdo con la entidad financiera.
        </Text>

        <Text style={styles.label3}>5. Cálculo de la Cuota Mensual Caducada</Text>
        <Text style={styles.label}>
          La cuota mensual caducada se calcula como la cuota del mes que no ha sido pagada, sumando cualquier
          interés de mora acumulado hasta la fecha de pago.
        </Text>

        <Text style={styles.label3}>6. Cálculo de la Comisión Total</Text>
        <Text style={styles.label}>
          Comisión total = Cuota mensual * porcentaje de comisión.
        </Text>

        <Text style={styles.label3}>7. Cálculo del Pago Total (Cuota + Comisión)</Text>
        <Text style={styles.label}>
          Pago total = Cuota mensual + Comisión total.
        </Text>
      </ScrollView>
    </View>
  );
};

