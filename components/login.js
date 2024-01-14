import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, Pressable  } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import CustomButton from './CustomButton';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/loginn.jpg')}
        />
      <Text style={styles.title}>Hallo!</Text>
      <Text style={styles.subtitle}>Silahkan masuk untuk melanjutkan</Text>
      <TextInput style={styles.input} placeholder='Username'/>
      <TextInput style={styles.input2} placeholder='Password'secureTextEntry/>
      <Text style={styles.title2}>Lupa Password?</Text>
      <CustomButton title="Masuk" 
      onPress={()=> navigation.navigate('Porto')}/>
      <Text style={styles.title3}>Belum punya akun?</Text>
      <Pressable
      onPress={() => navigation.navigate('Register')}>
      <Text style={styles.reg}>Register</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCE5FF',
    padding: 50,
    alignItems: 'center',
  },
   avatar: {
    width: 190,
    height: 198,
    marginBottom: 2,
  },
  title: {
    marginLeft: -90, 
    marginTop: 2,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    marginRight: -80
  },
  subtitle: {
    marginLeft: -90,
    marginRight: -80,
    color: 'grey',
    marginTop: -10,
    fontSize: 15,
  },
  input: {
    borderWidth: 2,
    margin: 10,
    marginTop: 30,
    textAlign: 'left',
    color: 'grey',
    borderColor: '#C0C0C0',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 320,
  },
  input2: {
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
  title2: {
    marginTop: -20,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'right',
    color: '#66B2FF',
    marginRight: -150,
  },
  title3: {
    marginTop: 90,
    marginRight: 50,

  },

  reg: {
    marginTop: -18,
    marginLeft: 130,
    color: '#66B2FF',
  }
  
});
