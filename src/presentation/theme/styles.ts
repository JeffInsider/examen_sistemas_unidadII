import { Button, StyleSheet } from "react-native";

//AQUI van los estilos de la aplicacion
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    detailsContainer: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginVertical: 4,
        color: '#3f3f3f',
    },
    label2: {
        fontSize: 18,
        marginVertical: 8,
        marginLeft: 8,
        color: '#282727',
        //letra negrita
        fontWeight: 'bold',
        marginBottom: 26,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    button2: {
        backgroundColor: '#28a745',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 20,
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    labelB: {
        //vinculo
        color: '#7fb9f8',
        fontSize: 16,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      description: {
        fontSize: 16,
        marginBottom: 15,
      },
      label3: {
        fontSize: 18,
        color: '#282727',
        //letra negrita
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 16,
        },
});