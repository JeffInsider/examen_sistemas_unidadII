import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useLoanCalculator } from '../../hooks/useLoanCalculator';
import { LoanForm } from '../../components/LoanForm';
import { styles } from '../../theme/styles';
import { AmortizationPlan } from '../../components/AmortizationPlan';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/Navigation';

export const LoanFormScreen = () => {
  const [loanDetails, setLoanDetails] = useState<{
    name: string,
    amount: number,
    annualInterestRate: number,
    months: number,
    startDate: string,
    commisionPercentage: number,
  } | null>(null);

  //estado para saber si se esta enviando el formulario
  const [isSubmit, setIsSubmit] = useState(false);

  //se agrega esto para poder ir a la siguiente pantalla
  //const navigation = useNavigation();
  const navigation = useNavigation<StackNavigationProp<RootStackParams, 'LoanForm'>>();

  const { calculation, isCalculation } = useLoanCalculator(
    loanDetails?.amount || 0,
    loanDetails?.annualInterestRate || 0,
    loanDetails?.months || 0,
    loanDetails?.startDate || '', // Convertir a cadena por el error
    loanDetails?.commisionPercentage || 0,
    !!loanDetails,
  );

  //este useEffect es para que se vaya a la siguiente pantalla
  useEffect(() => {
    if (!isCalculation && calculation && isSubmit) {
      navigation.navigate('AmortizationPlan', {
        name: loanDetails!.name,
        amount: loanDetails!.amount,
        annualInterestRate: loanDetails!.annualInterestRate,
        months: loanDetails!.months,
        startDate: loanDetails!.startDate,
        commisionPercentage: loanDetails!.commisionPercentage,
        monthlyPayment: calculation.monthlyPayment,
        commision: calculation.commision,
        totalPayment: calculation.totalPayment,
        svsd: calculation.svsd,
        defaultInterest: calculation.defaultInterest,
      });

      // Resetear el formulario
      setLoanDetails(null);
      // Resetea el estado de envío
      setIsSubmit(false);
    }
  }, [isCalculation, calculation]);

  //funcion para enviar el formulario
  const handleSubmit = (details: {
    name: string,
    amount: number,
    annualInterestRate: number,
    months: number,
    startDate: string,
    commisionPercentage: number,
  }) => {
    setLoanDetails(details);
    setIsSubmit(true);
  };

  return (
    <View style={styles.container}>
      <LoanForm onSubmit={handleSubmit} />
    </View>
  );
};
