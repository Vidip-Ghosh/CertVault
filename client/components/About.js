import React from 'react'
import { ScrollView,StyleSheet,Text,View,Image,Dimensions } from 'react-native';
const About = () => {
  return (
    <View>
      <Text style={styles.h1}>ABOUT OUR APP- CERT VAULT</Text>
      <Text style={styles.para}>In the digital age, managing and verifying certificates, badges, and important documents can be a daunting task. We understand the challenges you face, which is why we've created a cutting-edge solution - a digital locker cum certificate issuer and claimer portal. Our platform revolutionizes the way you handle your credentials, ensuring they are secure, easily accessible, and verifiable.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  h1:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20, 
  },
  para: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 20, 
  },
})
export default About
