import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TouchableOpacity, Alert} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import React, {useState} from 'react';
import CustomImage from './CustomImage'

export default function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const likefunction = () => {
    setLike(like + 1);
  };
  const dislikefunction = () => {
    setDislike(dislike + 1);
  };
  
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
    <Image 
          style={styles.avatar}
          source={require('../assets/pinguin.png')}
          />
    <Text style={styles.title}>Nabila Riska Amelia</Text>
    <Text style={styles.subTitle}>Halo saya anak tunggal, saya lahir di Banyumas 4 April 2006. 
    Hobi saya adalah mendengarkan musik</Text>
    <TouchableOpacity style={styles.button} onPress={() =>Alert.alert('hallo')}>
        <Text style={styles.text}>Contact Me</Text>
      </TouchableOpacity>
    <Text style={styles.title2}>My Recent Project</Text>

    <CustomImage gambar={require('../assets/avatar2.png')}/>
    <Text style={styles.title3}>Study App</Text>
    <Text style={styles.subTitle2}>Mobile App Design</Text> 
     <TouchableOpacity style={styles.button2} onPress={() => Alert.alert('Explore lebih lanjut?')}>
        <Image 
          style={styles.avatar3}
          source={require('../assets/next.png')}
          />
      </TouchableOpacity>

    <CustomImage gambar={require('../assets/avatar3.png')}/>
    <Text style={styles.title4}>Foodie</Text>
    <Text style={styles.subTitle3}>Landing Page Design</Text> 
        <TouchableOpacity style={styles.button2} onPress={() => Alert.alert('Explore lebih lanjut?')}>
        <Image 
          style={styles.avatar3}
          source={require('../assets/next.png')}
          />
      </TouchableOpacity>
      <Text style={styles.text2}>{like}            {dislike}</Text>
      <TouchableOpacity style={styles.button3} onPress={likefunction}>
      <Image style={styles.avatar5} source={require('../assets/like.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={dislikefunction}>
      <Image style={styles.avatar6} source={require('../assets/dislike.png')}/>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#E5CCFF',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: '#E5CCFF',
    marginHorizontal: 0,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'black',
    fontWeight: 'thin',
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#B266FF',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  title2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
  },
  title3: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: -235,
  },
  subTitle2: {
    color: 'black',
    fontWeight: 'thin',
    padding: 10,
    marginLeft: -205,
  },
   avatar3: {
    marginLeft: 270,
    marginTop: -70,
    width: 30,
    height: 30,
  },
  title4: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: -265,
  },
  subTitle3: {
    color: 'black',
    fontWeight: 'thin',
    padding: 10,
    marginLeft: -185,
  },
  text2: {
    marginTop: 10,
    marginLeft: -180,
    fontSize: 20,
  },
  avatar5: {
    height: 35,
    width: 35,
    marginTop: 10,
    marginRight: 265,
  },
 avatar6: {
    height: 35,
    width: 35,
    marginTop: -23,
    marginRight: 95,
 },
 button2: {
   marginTop: 10,
 },
});
