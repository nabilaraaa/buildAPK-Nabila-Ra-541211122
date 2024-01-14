import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';

const CustomImage = (props) => {
  return(
    <Image
    source={props.gambar}
    style={styles.avatar2}
    />
  );
}

const styles = StyleSheet.create({

avatar2: {
    height: 250,
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
 },
});


export default CustomImage;