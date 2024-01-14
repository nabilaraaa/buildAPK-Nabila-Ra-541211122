import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
  // You can import supported modules from npm
  import { Card } from 'react-native-paper';
  
  // or any files within the Snack
  import CustomButton from './CustomButton';
  import Custominput from './Custominput';
  
  export default function App({navigation}) {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../assets/loginn.jpg')} />
        <Text style={styles.title}>Hallo!</Text>
        <Text style={styles.subtitle}>Silahkan daftar untuk melanjutkan</Text>
        <Custominput placeholder="Nama Lengkap" />
        <Custominput style={styles.input2} placeholder="Email" />
        <Custominput style={styles.input3} placeholder="Password" secureTextEntry />
        <Custominput
          style={styles.input3}
          placeholder="Konfirmasi Password"
          secureTextEntry/>
        <Text style={styles.title2}>Tampilkan Password</Text>
        <CustomButton title="Daftar" 
        onPress={()=> navigation.navigate('Porto')}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCE5FF',
      padding: 20,
      alignItems: 'center',
    },
    avatar: {
      width: 190,
      height: 198,
      marginBottom: 10,
    },
    title: {
      marginLeft: -90,
      marginTop: 10,
      marginBottom: 20,
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'left',
      marginRight: -80,
    },
    subtitle: {
      marginLeft: -90,
      marginRight: -80,
      color: 'grey',
      marginTop: -10,
      fontSize: 15,
    },
    input2: {
      borderWidth: 2,
      margin: 10,
      textAlign: 'left',
      color: 'grey',
      borderColor: '#C0C0C0',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      width: 320,
    },
    input3: {
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
  });
  