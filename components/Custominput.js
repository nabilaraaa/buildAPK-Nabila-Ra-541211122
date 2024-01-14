import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
  const Custominput = (props) => {
    return (
        <TextInput style={styles.input} placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        />
      
    );
  }
  
  const styles = StyleSheet.create({
    
    input: {
      borderWidth: 2,
      margin: 10,
      marginTop: 10,
      textAlign: 'left',
      color: 'grey',
      borderColor: '#C0C0C0',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      width: 320,
    },
  });
  
  export default Custominput;