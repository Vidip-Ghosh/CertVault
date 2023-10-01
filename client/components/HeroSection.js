import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/BlockChain.jpeg')}
        />
      </View>
      <Text style={styles.h1}>
        Welcome to CertVault/CertSafe - Your Trusted Digital Locker and Certificate Issuer Portal!
      </Text>
      <Text style={styles.para}>
        Simplify the way you manage and share your credentials with our secure, decentralized platform. Store your certificates, badges, and important documents on the tamper-proof InterPlanetary File System (IPFS). Utilizing cutting-edge blockchain technology, we ensure your credentials are verifiable and authentic.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
  },
  backgroundImage: {
    aspectRatio: 1,
    height: 400, 
    width: 400, 
    borderRadius: 10, 
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20, 
  },
  para: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 20, 
  },
});

export default HeroSection;
