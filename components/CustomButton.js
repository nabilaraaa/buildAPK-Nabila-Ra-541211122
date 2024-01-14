import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert  } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';


const CustomButton = (props) => {
  return (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#66B2FF',
    padding: 10,
    borderRadius: 8,
    width: 320,
    height: 50,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'white',
  },
  
});

export default CustomButton;
