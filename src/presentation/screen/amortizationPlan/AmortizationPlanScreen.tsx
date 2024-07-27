import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import { RootStackParams } from '../../routes/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../../theme/styles';
import { AmortizationPlan } from '../../components/AmortizationPlan';

//se actualiza el tipo de la propiedad
type AmortizacionPlanScreenProps = RouteProp<RootStackParams, 'AmortizationPlan'>;

export const AmortizationPlanScreen = () => {
  //se obtienen los parametros de la pantalla anterior
  const route = useRoute<AmortizacionPlanScreenProps>();
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'AmortizationPlan'>>();

  //se obtienen los parametros de la pantalla anterior
  const {
    name,
    amount,
    annualInterestRate,
    months,
    startDate,
    commisionPercentage,
    monthlyPayment,
    commision,
    totalPayment,
    svsd,
    defaultInterest,
  } = route.params;

  //comprobar que se esten pasando los parametros para que no haya errores si hay uno nulo se retorna null
  if (
    !name ||
    !amount ||
    !annualInterestRate || 
    !months || 
    !startDate || 
    !commisionPercentage || 
    !monthlyPayment || 
    !commision || 
    !totalPayment) {
    return null;
  }

  //funcion para ir a la pantalla anterior
  const handleNavigateBack = () => {
    navigation.navigate('LoanForm');
  };

  return (
    <AmortizationPlan
      name={name}
      amount={amount}
      annualInterestRate={annualInterestRate}
      months={months}
      startDate={startDate}
      commisionPercentage={commisionPercentage}
      monthlyPayment={monthlyPayment}
      commision={commision}
      totalPayment={totalPayment}
      onNavigateBack={handleNavigateBack} 
      svsd={svsd} 
      defaultInterest={defaultInterest}
    />
  );
};
